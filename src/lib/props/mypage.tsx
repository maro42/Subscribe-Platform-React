export type UpdateMyinfo = {
    address:{
        zipCode : string,
        address1 : string,
        address2 : string,
    },
    phone : {
        phoneNumber:string
    },
}

export type PasswordInfo = {
    changePassword : string,
    currPassword : string
}