(function(){
   angular.module("teamApp")
   .controller("listCtrl", ListController);

   function ListController(){
   	var vm = this;
   	vm.data = teamMember;
   	vm.activeMember = {};
   	vm.changeActiveMember = changeActiveMember;
   	vm.search = "";

   	function changeActiveMember(index){
   		vm.activeMember = index;
   	}
   }

   var teamMember = [
   	{
   		name: "Ravi Shanker Tiwari",
   		image_url: "https://rincon.surfrider.org/wp-content/uploads/2016/02/Sea_Turtle_506f386b36187-1.jpg",
   		locations: "Noida",
   		age: "27 years",
   		experience: "3 years",
   		profile: "Linux Admin",
   		skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
   	},
{
         name: "Sumit Dhakre",
         image_url: "https://rincon.surfrider.org/wp-content/uploads/2016/02/Sea_Turtle_506f386b36187-1.jpg",
         locations: "Noida",
         age: "27 years",
         experience: "3 years",
         profile: "Linux Admin",
         skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
      },
{
         name: "Vritul Singh",
         image_url: "https://rincon.surfrider.org/wp-content/uploads/2016/02/Sea_Turtle_506f386b36187-1.jpg",
         locations: "Noida",
         age: "27 years",
         experience: "3 years",
         profile: "Linux Admin",
         skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
      },
{
         name: "Anand Dubey",
         image_url: "https://rincon.surfrider.org/wp-content/uploads/2016/02/Sea_Turtle_506f386b36187-1.jpg",
         locations: "Noida",
         age: "27 years",
         experience: "3 years",
         profile: "Linux Admin",
         skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
      },
      {
         name: "Nisha Choudhary",
         image_url: "https://rincon.surfrider.org/wp-content/uploads/2016/02/Sea_Turtle_506f386b36187-1.jpg",
         locations: "Noida",
         age: "27 years",
         experience: "3 years",
         profile: "Linux Admin",
         skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
      },
      {
         name: "Nilesh Karn",
         image_url: "https://rincon.surfrider.org/wp-content/uploads/2016/02/Sea_Turtle_506f386b36187-1.jpg",
         locations: "Noida",
         age: "27 years",
         experience: "3 years",
         profile: "Linux Admin",
         skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
      },
      {
         name: "Priti Tripathi",
         image_url: "https://rincon.surfrider.org/wp-content/uploads/2016/02/Sea_Turtle_506f386b36187-1.jpg",
         locations: "Noida",
         age: "27 years",
         experience: "3 years",
         profile: "Linux Admin",
         skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
      },
      {
         name: "Karan Tewari",
         image_url: "https://rincon.surfrider.org/wp-content/uploads/2016/02/Sea_Turtle_506f386b36187-1.jpg",
         locations: "Noida",
         age: "27 years",
         experience: "3 years",
         profile: "Linux Admin",
         skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
      },
      {
         name: "Mayank Tyagi",
         image_url: "https://rincon.surfrider.org/wp-content/uploads/2016/02/Sea_Turtle_506f386b36187-1.jpg",
         locations: "Noida",
         age: "27 years",
         experience: "3 years",
         profile: "Linux Admin",
         skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
      },
      {
         name: "Gagan Duggal",
         image_url: "https://rincon.surfrider.org/wp-content/uploads/2016/02/Sea_Turtle_506f386b36187-1.jpg",
         locations: "Noida",
         age: "27 years",
         experience: "3 years",
         profile: "Linux Admin",
         skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
      },

   ]


})();