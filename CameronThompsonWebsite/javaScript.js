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
		ResumePicture.src = "Images/ResumeImage.PNG";
	} else {
		ResumePicture.src = "Images/ResumeImageHover.PNG";
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
	PopulateWithTab(tab);
}

var tabContents = ['', '<img src="Skills/3DModelling/Night_Swarz.png" alt="ModelImage1.png" style="position: absolute; top: 10px; left: 10px; height: 200px;">' +
			'<img src="Skills/3DModelling/Night_Swarz_AllClothes.png" alt="ModelImage2.png" style="position: absolute; bottom: 10px; left: 10px; height: 200px;">' +
			'<p style="position: absolute; top: calc(50% - 50px); left: 0px; width: 170px; text-align: center; font-size: 180%;">Character 1</p>' +
			'<img src="Skills/3DModelling/Samurai_Render.png" alt="ModelImage3.png" style="position: absolute; top: 10px; right: 30px; height: 200px;">' +
			'<img src="Skills/3DModelling/Samurai_Posed.png" alt="ModelImage4.png" style="position: absolute; bottom: 10px; right: 10px; height: 200px;">' +
			'<p style="position: absolute; top: calc(50% - 50px); right: 0px; width: 170px; text-align: center; font-size: 180%;">Character 2</p>' +
			'<p style="position: absolute; top: 0px; left: 175px; height: calc(100% - 20px); width: calc(100% - 330px); text-align: center;"> I have been 3D modelling since January of 2014. I have been doing so as a recreational activity in order to provide myself with objects to move around in a gaming environment. I enjoy the coding challanges I face more so than 3D modelling, however through developing my skills I have acquired a talent and satasfaction through the models I have created. I started with very basic designs and now I am confident in my abilities to create models based on 2D sketches, texture and paint the models as well as pose and render them to create images. The tools I have always used are the <i>Blender</i> 3D Modelling program. This is a free program that is mainly used in low budget game making.</p>' +
			'<p style="position: absolute; top: 220px; left: 175px; height: calc(100% - 20px); width: calc(100% - 330px); text-align: center; font-size: 200%;">Some More Models</p>' +			
			'<img id="ChangingImage" style="position: absolute; top: 300px; left: calc(50%); height: 200px;">' +
			'<img src="Images/LeftArrow.png" style="position: absolute; top: 350px; left: calc(50% - 200px); height: 50px; cursor: pointer;" onclick="ChangeToNext("false");">' +
			'<img src="Images/RightArrow.png" style="position: absolute; top: 350px; right: calc(50% - 200px); height: 50px; cursor: pointer;" onclick="ChangeToNext("true");">' +
			'' +
			'<script>' +
			'' +
			'var currentImage = 0;' +
			'var imageID = ["Night_Swarz.png", "Night_Swarz_AllClothes.png", "Samurai_Posed.png", "Samurai_Render.png"];' +
			'' +
			'function ChangeImageTo(number){' +
				'img = document.getElementById("ChangingImage");' +
				'currentImage = number;' +
				'img.src = "Skills/3DModelling/" + imageID[number];' +
				'img.setAttribute("style", "height: 200px;");' +
				'var width = img.clientWidth/2;' +
				'img.setAttribute("style", "position: absolute; top: 300px; left: calc(50% - " + width.toString() + "px); height: 200px;");' +
			'}' +
			'' +
			'function ChangeToNext(forward){' +
				'if(forward == "true"){' +
					'if(currentImage == imageID.length-1){' +
						'ChangeImageTo(0);' +
					'} else {' +
						'ChangeImageTo(currentImage+1);' +
					'}' +
				'} else {' +
					'if(currentImage == 0){' +
						'ChangeImageTo(imageID.length-1);' +
					'} else {' +
						'ChangeImageTo(currentImage-1);' +
					'}' +
				'}' +
			'}' +
			'' +
			'ChangeImageTo(0);' +
			'</script>','','','',''];

function PopulateWithTab(tab){
	div = document.getElementById("SkillsPane");
	
	div.innerHTML = tabContents[tab];
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
		img.src = "Images/DownArrow(WhiteCircle).png";
	} else {
		img.src = "Images/UpArrow(WhiteCircle).png";
	}
}
