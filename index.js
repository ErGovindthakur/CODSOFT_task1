// Writing our all the logics here 

const SendData = (event) => {
     event.preventDefault()
     const formData = event.target
     const customerName = formData.name.value
     alert(`Hi Dear ${customerName} Welcome to PraGo,And Thanks for your valuable feedback, For any Query please contact us`)
     formData.reset()
}