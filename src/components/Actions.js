export const addAccount =(each_account)=> {
    each_account.id = Math.random().toString()
    return {
        type: "ADD_ACCOUNT",
        payload: each_account
    }

}

export const EditAccountAction = (id, updatedAccount)=> {
    updatedAccount.id = Math.random().toString()
   
    return {
        type: "EDIT_ACCOUNT",
        id : id,
        updatedAccount : updatedAccount
      

    }
}


export const DeleteAccount = (id)=> {
   
    return {
        type: "DELETE_ACCOUNT",
        payload : id,
     

    }

   
}