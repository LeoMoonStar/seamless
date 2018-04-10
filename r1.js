/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $.getJSON("patient.json", function (data) {

        var arrItems = [];      // THE ARRAY TO STORE JSON ITEMS.
        //var firstName = [];
        //var lastName = [];
        var name=[];
        var peopleNum;
        var gender;
        var org;
        var condition = [];
        //var conditionNum;
        $.each(data, function (index, value) {
            //arrItems.push(value);
            if (index == "name") {
                name=value;
                //document.write(name[0].family);
            }
            if (index == "gender")
                gender = value;
            if (index == "managingOrganization")
                org = value;
            if (index =="conditions") {
                condition=value;
            }
        });
        document.write("Name of patient:");
        for(var i=0;i<name.length;i++){
            document.write(name[i].family+" "+name[i].given);
        }
        document.write("<br>");
        document.write("Organization name: "+org.display+"<br>");
        document.write("Gender: "+gender.charAt(0).toUpperCase()+gender.slice(1)+"<br>");
        document.write("Number of conditions they have: "+condition.length+"<br>");
        document.write("List of all conditions:<br>");// PUSH THE VALUES INSIDE THE ARRAY.
        for(var i=0;i<condition.length;i++)
            document.write("   "+"-"+condition[i]+"<br>");


        /* templete:
         * Name of patient:
         * Organization name:
         * Gender:
         * Number of conditions they have:
         * List of all conditions:
         * /
         
         // EXTRACT VALUE FOR TABLE HEADER.
         /*var col = [];
         for (var i = 0; i < arrItems.length; i++) {
         for (var key in arrItems[i]) {
         if (col.indexOf(key) === -1) {
         //col.push(key);
         document.write(key);
         document.write("<br>");
         }
         }
         }*/


    });
});