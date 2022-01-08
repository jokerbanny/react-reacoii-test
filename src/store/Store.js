import { atom } from 'recoil'

export const registerAtom = atom({
  key: 'USER_REGISTER',
  default: {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirm: '',
  },
})
