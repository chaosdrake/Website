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

function SocialMediaHighlight(TF, ImageID, NameID, PicPath, HoverPicPath){
	socialMediaPicture = document.getElementById(ImageID);
	socialMediaName = document.getElementById(NameID);
	
	if (TF){
		socialMediaPicture.src = HoverPicPath;
		socialMediaName.style.visibility = "visible";
	} else {
		socialMediaPicture.src = PicPath;
		socialMediaName.style.visibility = "hidden";
	}
}

function FacebookImageHighlight(TF){
	SocialMediaHighlight(TF, "FacebookImage", "FacebookName", 
			"Images/FacebookLogo.png", "Images/FacebookLogoHover.png");
} 

function GitHubImageHighlight(TF){
	SocialMediaHighlight(TF, "GitHubImage", "GitHubName", 
			"Images/GitHubLogo.png", "Images/GitHubLogoHover.png");
}

function DiscordImageHighlight(TF){
	SocialMediaHighlight(TF, "DiscordImage", "DiscordName",
			"Images/Discord.png", "Images/DiscordHover.png");
}

function OpenFacebook(){
	window.open("https://www.facebook.com/cameron.thompson.169");
}

function OpenGitHub(){
	window.open("https://github.com/chaosdrake");
}

function OpenDiscord(){
	window.open("https://discordapp.com");
}

function DisplayInfo(TF){
	infoDiv = document.getElementById("InfoDiv");
	if (TF){
		infoDiv.style.visibility = "visible";
	} else {
		infoDiv.style.visibility = "hidden";
	}
}

function ResumeHighlight(TF){
	ResumePicture = document.getElementById("ResumeImage");
	
	if (TF){
		ResumePicture.src = "Images/ResumeImage.PNG";
	} else {
		ResumePicture.src = "Images/ResumeImageHover.PNG";
	}
}