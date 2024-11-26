export default function contact(values){
    const errors={};
    const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const contact_pattern=/^[6-9]{1}[0-9]{9}$/;
    if(values.username===''){
        errors.username="Enter your username";
    }
    if(values.email===''){
        errors.email="Enter your email";
    }
    else if(!email_pattern.test(values.email)){
        errors.email="Email isn't correct"
    }
    if(values.phone===''){
        errors.phone="Enter your phone no.";
    }
    else if(!contact_pattern.test(values.phone)){
        errors.phone="Phone no isn't correct";
    }
    if(values.subject===''){
        errors.subject="Enter the subject";
    }
    if(values.message===''){
        errors.message="Enter your message";
    }
    return errors;
}