export default function vehvalidate(carname,seat,geartype,rent,cartype,image,milage){
    const errors={};
    if(carname===''){
        errors.carname="Enter a carname ";
    }
    if(seat===0){
        errors.seat="Enter Seating capacity";
    }
    if(geartype===""){
        errors.geartype="Enter geartype of a vehicle";
    }
    if(rent===0){
        errors.rent="Enter some rent.";
    }
    if(cartype===''){
        errors.cartype="Enter the cartype.";
    }
    if(milage===0){
        errors.milage="Specify the milege of car";
    }
    if(image===null){
        errors.image="Enter a image in .jpg,.jpeg or .png format only";
    }
    else {
        const allowedtypes=['image/jpeg','image/png'];
        if(!allowedtypes.includes(image.type)){
            errors.image="Enter a .jpg or .jpeg or .png file only";
        }
    }
    return errors;
}