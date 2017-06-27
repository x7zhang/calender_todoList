var calendar = {
    currentDate: new Date(),
    generateTable: function(firstDate){

        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var myMonth = months[this.currentDate.getMonth()];
        var myYear = this.currentDate.getFullYear();
        document.getElementsByClassName('switch')[0].innerHTML = myMonth + ' '  + myYear;
        //Create Table
        var dateTable = document.getElementById('dataTable');

        dateTable.innerHTML = "";

        for (var i = 0, date = firstDate.getDate(); i != 6; i++)
        {
            var newRow = document.createElement('tr');
            for (var j = 0; j != 7; j++)
            {
                var newDate = document.createElement('td');
                firstDate.setDate(++date);
                date = firstDate.getDate()
                newDate.innerText = date;
                newDate.className = this.currentDate.getFullYear()+'/'+(parseInt(this.currentDate.getMonth())+1)+'/'+date;
                newRow.appendChild(newDate);
                newDate.onclick = function loadList() {console.log(newDate.className)};

            }
            dateTable.appendChild(newRow);
        }
    },
    newCalendar: function() {
        var month = this.currentDate.getMonth();
        var year = this.currentDate.getFullYear();
        var myMonthFirstDay = (new Date(year, month, 1)).getDay();
        var myFirstDay = new Date(year, month, -myMonthFirstDay);

        this.generateTable(myFirstDay);
        this.currentDate.setFullYear(year);
        this.currentDate.setMonth(month);
    },
    prevs: function() {
        var currentMonth = this.currentDate.getMonth();
        this.currentDate.setMonth( --currentMonth );
        this.newCalendar(this.currentDate);
    },
    nexts: function() {
        var currentMonth = this.currentDate.getMonth();
        this.currentDate.setMonth( ++currentMonth );
        this.newCalendar(this.currentDate);
    }
};

calendar.newCalendar();
