export default function SignupValidation(values){
    const errors={};
    const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
   const contact_pattern=/^[6-9]{1}[0-9]{9}/;
    if(values.firstname===""){
        errors.firstname="First name is reqired";
    }
    if(values.lastname===""){
        errors.lastname="Last name is reqired";
    }
    if(values.email===""){
        errors.email="Email is reqired";
    }
    else if(!email_pattern.test(values.email)){
        errors.email="Email isn't correct"
    }
    if(values.password===""){
        errors.password="Password is reqired";
    }
    if(values.confirmpassword===""){
        errors.confirmpassword="Confirm password is reqired";
    }
    else if(values.password!==values.confirmpassword){
        errors.confirmpassword="This should be same as password";
    }
    if(values.phone===""){
        errors.phone="Phone no. is required.";
    }
    else if(!contact_pattern.test(values.phone)){
        errors.phone="Phone no isn't correct";
    }
    return errors;
}