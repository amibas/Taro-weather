import {importPKCS8, importSPKI, jwtVerify, SignJWT} from "jose";

const config = {
  kid: 'T8PRTEDNFW',
  sub: '2G2D49PW6J',
  privateKey: process.env.TARO_APP_JWT_PRIVATE_KEY || '',
}

export const generateJWT = async () => {
  const header = {
    alg: 'EdDSA',          // 固定值
    kid: config.kid,       // 凭据ID
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    sub: config.sub,       // 项目ID
    iat: now - 30,         // 签发时间（当前时间前30秒）
    exp: now + 3600,       // 过期时间（示例：1小时后）
  };

  const privateKey = await importPKCS8(
    config.privateKey,
    'EdDSA'
  );

  return await new SignJWT(payload)
    .setProtectedHeader(header)
    .sign(privateKey);
}

export async function verifyToken(token: string, publicKeyPem: string) {
  const publicKey = await importSPKI(publicKeyPem, 'EdDSA');
  const {payload} = await jwtVerify(token, publicKey);
  console.log('验证通过，Payload:', payload);
}
