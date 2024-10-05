import { genSaltSync, hashSync } from 'bcrypt-ts'

export const bcryptEncrypt = (password: string) => {
    const salt = genSaltSync(8)
    return hashSync(password, salt)
}
