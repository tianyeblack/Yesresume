var bio = {
	"name" : "Ye Tian",
	"role" : "Software Engineer",
	"contacts" : {
		"mobile" : "626-381-8149",
		"email" : "yetian@usc.edu",
		"github" : "tianyeblack",
		"twitter" : "@tianyeblack",
		"location" : "Los Angeles"
	},
	"bioPic" : "images/me.jpg",
	"welcomeMessage" : "Hello, this is YE",
	"skills" : [
		"HTML5", "jQuery", "C", "C++", "Java", "Python"
	],
	"display" : function() {
		var fmtName = HTMLheaderName.replace("%data%", bio.name);
		var fmtRole = HTMLheaderRole.replace("%data%", bio.role);

		var fmtMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var fmtEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var fmtTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var fmtGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var fmtLocation = HTMLlocation.replace("%data%", bio.contacts.location)
		var fmtBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var fmtWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		var fmtContacts = fmtMobile + fmtEmail + fmtTwitter + fmtGithub + fmtLocation;

		$("#header").prepend(fmtRole);
		$("#header").prepend(fmtName);
		$("#header").append(fmtBioPic);
		$("#header").append(fmtWelcomeMsg);

		$("#topContacts").append(fmtContacts);
		$("#footerContacts").append(fmtContacts);
	}
};

var education = {
	"schools" : [
		{
			"name" : "University of Southern California",
			"location" : "Los Angeles, CA, US",
			"degree" : "Master of Science",
			"majors" : ["Computer Science"],
			"dates" : "Fall 2013",
			"url" : "http://www.usc.edu"
		},
		{
			"name" : "Tongji University",
			"location" : "Shanghai, Shanghai, China",
			"degree" : "Bachelor of Engineering",
			"majors" : ["Computer Science"],
			"dates" : "Fall 2009",
			"url" : "http://www.tongji.edu.cn"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front End Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "Spring 2015",
			"url" : "https://www.udacity.com/course/nd001"
		}
	],
	"display" : function() {
		for (var edu in education.schools) {
			$("#education").append(HTMLschoolStart);
			var fmtSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
			var fmtSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
			var fmtSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
			var fmtSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
			var fmtSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors.join(", "));
			$(".education-entry:last").append(fmtSchoolName + fmtSchoolDegree + fmtSchoolDates + fmtSchoolLocation + fmtSchoolMajor);
			$(".education-entry:last a").attr("href", education.schools[edu].url);
		}
		$("#education").append(HTMLonlineClasses);
		for (var oc in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var fmtOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[oc].title).replace("#", education.onlineCourses[oc].url);
			var fmtOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[oc].school);
			var fmtOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[oc].dates);
			var fmtOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[oc].url).replace("#", education.onlineCourses[oc].url);
			$(".education-entry:last").append(fmtOnlineTitle + fmtOnlineSchool + fmtOnlineDates + fmtOnlineURL);
		}
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "Amazon",
			"title" : "Software Engineer",
			"location" : "Seattle, WA, US",
			"dates" : "7/13/2015 - Future",
			"description" : "Machine Learning and Data Mining"
		}
	],
	"display" : function() {
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var fmtSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(fmtSkill);
			};
		};

		for (var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var fmtWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var fmtWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var fmtWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var fmtWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var fmtWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(fmtWorkEmployer + fmtWorkTitle + fmtWorkDates + fmtWorkLocation + fmtWorkDescription);
		};
	}
}

var projects = {
	"projects" : [
		{
			"title" : "Weenix Kernel Programming",
			"dates" : "Spring 2014",
			"description" : "Process Management, Virtual File System and Virtual Memory",
			"images" : ["images/OS_PROCS.png", "images/OS_VFS.png", "images/OS_VM.png"]
		}
	],
	"display" : function(){
		var projs = projects.projects;
		for (var project in projs) {
			$("#projects").append(HTMLprojectStart);
			var fmtProjectTitle = HTMLprojectTitle.replace("%data%", projs[project].title);
			var fmtProjectDates = HTMLprojectDates.replace("%data%", projs[project].dates);
			var fmtProjectDescription = HTMLprojectDescription.replace("%data%", projs[project].description);
			if (projs[project].images.length > 0) {
				var imgs = projs[project].images;
				var fmtProjectImages = "";
				for (var img in imgs) {
					fmtProjectImages += HTMLprojectImage.replace("%data%", imgs[img]);
				}
				fmtProjectDescription += fmtProjectImages;
			}
			$(".project-entry:last").append(fmtProjectTitle + fmtProjectDates + fmtProjectDescription);
		};
	}
}

function inName(name) {
	var names = name.split(" ");
	return names[0][0].toUpperCase() + names[0].slice(1).toLowerCase() + " " + names[1].toUpperCase();
}

bio.display();
work.display();
projects.display();
education.display();

// $("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
