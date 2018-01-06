function ChangeImageSize(bigger){
	profileImage = document.getElementById("ProfilePic");
	profileName = document.getElementById("ProfileName");
	socialMediaDiv = document.getElementById("SocialMediaDiv");
	
	if (bigger){
		profileImage.style.height = "280%";
		profileName.style.left = "36%";
		socialMediaDiv.style.top = "30%";
	} else {
		profileImage.style.height = "70%";
		profileName.style.left = "13%";
		socialMediaDiv.style.top = "10%";
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
			"../images/FacebookLogo.png", "../images/FacebookLogoHover.png");
} 

function GitHubImageHighlight(TF){
	SocialMediaHighlight(TF, "GitHubImage", "GitHubName", 
			"../images/GitHubLogo.png", "../images/GitHubLogoHover.png");
}

function DiscordImageHighlight(TF){
	SocialMediaHighlight(TF, "DiscordImage", "DiscordName",
			"../images/Discord.png", "../images/DiscordHover.png");
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
		$('#InfoDiv').stop().fadeIn();
	} else {
		//infoDiv.style.visibility = "hidden";
		$("#InfoDiv").stop().fadeOut();
	}
}

function fade(){
	
}

function ResumeHighlight(TF){
	ResumePicture = document.getElementById("ResumeImage");
	
	if (TF){
		ResumePicture.src = "../images/ResumeImage.PNG";
	} else {
		ResumePicture.src = "../images/ResumeImageHover.PNG";
	}
}

Tabs = document.getElementsByName("Tab");
var SelectedTab = 0;

function HoverTabs(tab, TF){
	if(tab != SelectedTab){
		if (TF){
			Tabs[tab-1].setAttribute("style", "background-color: grey;");
		} else {
			Tabs[tab-1].setAttribute("style", "background-color: black;");
		}
	}
}

function SelectTab(tab){
	SelectedTab = tab;
	for (var i = 0; i < Tabs.length-1; i++){
			if (i != tab-1){
				Tabs[i].setAttribute("style", "background-color: black;");
			} else {
				Tabs[i].setAttribute("style", "background-color: #6b00b3;");
			}
	}
	;
}

var EducationPanelTop = -475;
var id;
var up = "true";

function EducationPopUp(){
	if(EducationPanelTop <= -475){
		window.up = "true";
		ChangeEducationPanelIcon("true");
	} else {
		window.up = "false";
		ChangeEducationPanelIcon("false");
	}
		window.id = setInterval(frame, 3);
}

function frame(){
	panel = document.getElementById("EducationPanel");
	if(window.up == "true"){
		if(EducationPanelTop == 0){
			clearInterval(window.id);
		} else {
			EducationPanelTop+=5;
			panel.style.bottom = EducationPanelTop.toString() + "px";
		}
	} else {
		if(EducationPanelTop == -475){
			clearInterval(window.id);
		} else {
			EducationPanelTop-=5;
			panel.style.bottom = EducationPanelTop.toString() + "px";
		}
	}
}

function ChangeEducationPanelIcon(up){
	img = document.getElementById("EducationArrow");
	
	if (up == "true"){
		img.src = "../images/DownArrow(WhiteCircle).png";
	} else {
		img.src = "../images/UpArrow(WhiteCircle).png";
	}
}
