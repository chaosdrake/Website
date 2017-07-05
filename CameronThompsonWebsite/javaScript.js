function ChangeImageSize(bigger){
	profileImage = document.getElementById("ProfilePic");
	profileName = document.getElementById("ProfileName");
	socialMediaDiv = document.getElementById("SocialMediaDiv");
	
	if (bigger){
		profileImage.style.height = "160px";
		profileName.style.left = "220px";
		socialMediaDiv.style.top = "180px";
	} else {
		profileImage.style.height = "40px";
		profileName.style.left = "80px";
		socialMediaDiv.style.top = "60px";
	}
}

function FacebookImageHighlight(TF){
	facebookPicture = document.getElementById("FacebookImage");
	facebookName = document.getElementById("FacebookName");
	
	if (TF){
		facebookPicture.src = "Images/FacebookLogoHover.png";
		facebookName.style.visibility = "visible";
	} else {
		facebookPicture.src = "Images/FacebookLogo.png";
		facebookName.style.visibility = "hidden";
	}
} 

function OpenFacebook(){
	window.open("https://www.facebook.com/cameron.thompson.169");
}

function GitHubImageHighlight(TF){
	GitHubPicture = document.getElementById("GitHubImage");
	GitHubName = document.getElementById("GitHubName");
	
	if (TF){
		GitHubPicture.src = "Images/GitHubLogoHover.png";
		GitHubName.style.visibility = "visible";
	} else {
		GitHubPicture.src = "Images/GitHubLogo.png";
		GitHubName.style.visibility = "hidden";
	}
}

function OpenGitHub(){
	window.open("https://github.com/chaosdrake");
}

function DisplayInfo(TF){
	infoDiv = document.getElementById("InfoDiv");
	if (TF){
		infoDiv.style.visibility = "visible";
	} else {
		infoDiv.style.visibility = "hidden";
	}
}