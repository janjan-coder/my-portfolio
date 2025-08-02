let profilepic = document.getElementById("profilepic");
let ProfilepicFb = document.getElementById("ProfilepicFb");


ProfilepicFb.addEventListener("mouseover",function(){
    ProfilepicFb.style.transform="scale(1.25)";
    ProfilepicFb.style.transition="transform 0.5s ease-in";})
ProfilepicFb.addEventListener("mouseout",function(){
    ProfilepicFb.style.transform="scale(1.00)";
    ProfilepicFb.style.boxShadow="none";
})

$("#ProfilepicFb").click(function(){
    swal("hi there!");
})
$('#btnTourPage').click(function(){
    location.replace("myworks.html");
});

