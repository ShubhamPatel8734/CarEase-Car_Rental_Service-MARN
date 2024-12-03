export default function SignupValidation(values){
    const errors={};
    const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
   const contact_pattern=/^[6-9]{1}[0-9]{9}$/;
   const password_pattern=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-za-z\d@$!%*?&]{8,15}$/;
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
    else if((values.password).length<8 || (values.password).length>15){
        errors.password="Password should be of 8-15 characters";
    }
    else if(!password_pattern.test(values.password)){
        errors.password="It should contain 1 Capital, 1 small alphabet, 1 digit and 1 special character";
    }
    if(values.confirmpassword===""){
        errors.confirmpassword="Confirm password is reqired";
    }
    else if((values.confirmpassword).length<8 || (values.confirmpassword).length>15){
        errors.confirmpassword="Confirm password should be of 8-15 characters";
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