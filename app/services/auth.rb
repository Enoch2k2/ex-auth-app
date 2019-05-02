class Auth
  attr_accessor :token

  def initialize(headers)
    self.token = headers["Authorization"].scan(/bearer (.*)$/).flatten.last
  end

  def decode
    alg = 'HS256'
    secret = '2c20f958fb4d5bd174748a30fd2658971a2b9f4229c1f6cc5f45a2d297a320bf8746b99ee705fc8b33363266f080153908d28a1b7e6b0eaee6eab84990d63fd7'
    JWT.decode(token, secret, alg)
  end

  def self.generate_token(user)
      alg = 'HS256'
      secret = '2c20f958fb4d5bd174748a30fd2658971a2b9f4229c1f6cc5f45a2d297a320bf8746b99ee705fc8b33363266f080153908d28a1b7e6b0eaee6eab84990d63fd7'
      payload = { user_id: user.id }
      JWT.encode(payload, secret, alg)
  end

  def get_user_id_from_token
    return if token == "null"
    payload = decode
    payload.first["user_id"]
  end

  def self.get_user_from_token(headers)
    auth = Auth.new(headers)
    User.find_by_id(auth.get_user_id_from_token)
  end
end