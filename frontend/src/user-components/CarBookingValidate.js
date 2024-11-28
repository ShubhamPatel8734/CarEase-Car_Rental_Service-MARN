export default function Carbookingvalidation(license,pickupdate,returndate,totalprice,payment){
    const errors={};
    const license_pattern=/^[A-Z]{2}\d{2}\s?\d{4}\s?\d{4}$/;
    if(license===""){
        errors.license="License no. is reqired";
    }
    else if(!license_pattern.test(license)){
        errors.license="Enter a valid License no."
    }
    if(pickupdate===""){
        errors.pickupdate="Pickup date is reqired";
    }
    if(returndate===""){
        errors.returndate="Return date is reqired";
    }
    if(pickupdate!=="" && returndate!==""){
        const pickup=new Date(pickupdate);
        const drop=new Date(returndate);
        const todaydate=new Date();
        if(pickup.setHours(0,0,0,0)<todaydate.setHours(0,0,0,0) || drop.setHours(0,0,0,0)<todaydate.setHours(0,0,0,0)){
            if(pickup.setHours(0,0,0,0)<todaydate.setHours(0,0,0,0)){
                errors.pickupdate="Date should atleast be of today";
            }
            if(drop.setHours(0,0,0,0)<todaydate.setHours(0,0,0,0)){
                errors.returndate="Date should atleast be of today";
            }
        }
        else if((pickup.setHours(0,0,0,0) > drop.setHours(0,0,0,0))){
            errors.pickupdate="Pickup date has to be lower than Return date";
            errors.returndate="Pickup date has to be lower than Return date";
        }
    }
    if(payment===""){
        errors.payment="Payment method reqired";
    }
    if(totalprice==0){
        errors.totalprice="Total price is reqired";
    }
    return errors;
}