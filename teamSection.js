// When the page loads, Hide all the div which show the images of the team members
// $(".teamMembers").hide();

// Toggle Slide up and down when the team members button is clicked
$("#mlTeamBtn").click(function () {
    $("#mlTeam").toggleClass("teamMembers-active");
});

$("#dsaTeamBtn").click(function () {
    $("#dsaTeam").toggleClass("dsamembers-active");
});

$("#webdTeamBtn").click(function () {
    $("#webdTeam").toggleClass("teamMembers-active");
});
