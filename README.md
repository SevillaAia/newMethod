# newMethod
EX 1 UPVOTES DOWNVOTES
​
Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. 
This is calculated by subtracting the number of downvotes from upvotes.
​
Examples
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
​
getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
​
getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
​
Notes
- You can expect only positive integers for vote counts.
<br>
<br>
​
​
EX 2 VOLUME OF A BOX --------------------------------------------------------------------
​
Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
​
Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
​
volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
​
volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
​
Notes
- Don't forget to return the result.
- Remember that the values are in an object.
- Volume is length * width * height.
​
<br><br>
EX 3 LUKE I AM YOUR... --------------------------------------------------------------------
​
Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
​
| Person |	Relation |
| --- | ----------- |
| Darth Vader |	father |
| Leia |	sister |
| Han |	brother in law |
| R2D2	| droid |
​
​
Examples
​
relationToLuke("Darth Vader") ➞ "Luke, I am your father."
​
relationToLuke("Leia") ➞ "Luke, I am your sister."
​
relationToLuke("Han") ➞ "Luke, I am your brother in law."
​
​
<br><br>
​
EX 4 SPORTS PLAYER --------------------------------------------------------------------
​
Create an obj containing the following properties for a particular football player:
​
name\
age\
height\
weight\
<br>
Also, create three methods that returns the following strings:
​
getAge() returns "name is age 25" \
getHeight() returns "name is 175 cm" \
getWeight() returns "name weighs 75 kg" \
<br>
Notes
- name will be passed in as a string 
​
<br><br>
EX 5 ACTIVITIES -----------------------------------------------------------------------
​
Create an object called "myDay" that contains 2 properties:
- arrDays ( an array containing the days of the week in word )
- arrActivities ( an empty array )
​
and 2 methods:
- dayOfTheWeek - ( using the date object you will have to extract the current day of the week in words! Tip: Use the arrDays as well! ) <br>
                    You will have to RETURN the day of the week. 
- addActivities - this method takes an array as a param and will print the following
<br> 
"Today is Monday and these are my activities 😴,👕 "
​
<br>
​
Once you are done, call the addActivities method ( outside the obj ) and pass an array with some emojis..( more emojis here https://getemoji.com/ )
<br>
Make sure you wrap the emojis in quotes.       
Example             
myDay.addActivities( [ "��", "��" ] );
Collapse










