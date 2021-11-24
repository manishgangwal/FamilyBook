var i = 0;
function show(){
pics1 =["GRAND MOTHER.jpg","MOTHER.jpg","FATHER.jpg","SISTER.jpg","ME.png"] ;
name1 = ["My Grandmother(Aruna Gangwal)","My Mom (Samta Jain)", "My Father (Manish Gangwal)", "My Sister(Bhavisha)", "Me (Nimisha)"];
document.getElementById("lblname").innerHTML = name1[i];
document.getElementById("img1").src = pics1[i];
i++;
if (i == 5){
i = 0;
}
}
