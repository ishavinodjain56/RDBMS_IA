use IA2 //use command :to use a particular database.
db //db command: to see which databse you're using!
show dbs //show dbs command
//database->collection->documents  (hierarchy)

//create an array inside to insert multiple documents inside a collection
db.students.insert(
[
    {
		"Student No.": "1",
		"FirstName":"Isha",
		"LastName":"Jain",
		"Age":"19"
	},
	{
		"Student No.": "2",
		"FirstName":"Dhanvi",
		"LastName":"Sheth",
		"Age":"20"
	},
	{
		"Student No.": "3",
		"FirstName":"Khushi",
		"LastName":"Jivavat",
		"Age":"19"
	},
	{
		"Student No.": "4",
		"FirstName":"Yash",
		"LastName":"Parekh",
		"Age":"20"
	},
	{
		"Student No.": "5",
		"FirstName":"Ishan",
		"LastName":"Jain",
		"Age":"14"
	},
	{
		"Student No.": "6",
		"FirstName":"Anchal",
		"LastName":"Jain",
		"Age":"20"
	},
	{
		"Student No.": "7",
		"FirstName":"Aryan",
		"LastName":"Jain",
		"Age":"20"
	},
	{
		"Student No.": "8",
		"FirstName":"Anish",
		"LastName":"Jain",
		"Age":"24"
	},
	{
		"Student No.": "9",
		"FirstName":"Meghna",
		"LastName":"Jain",
		"Age":"27"
	},
	{
		"Student No.": "10",
		"FirstName":"Heena",
		"LastName":"Jain",
		"Age":"32"
	}
]
)

db.students.find() //displays all the documents in the particular collection

db.students.findOne() //displays the first document entered in the the collection
db.students.count() //displays the no. of documents in the the collection
db.students.find().limit(5) //displays only 5 document
db.students.find().sort({Age:-1}) //sorts all the document in the collection in descending order
db.students.find().sort({Age:1}) //sorts all the document in the collection in ascending order

//update command
db.students.update({"_id" : ObjectId("6086ee39acbc035489180ebd")},{$set :{"LastName" : "srisrimal"}})
db.students.find()

//save command - insets new document or update data depends on the parameter
db.students.save({
		"Student No.": "15",
		"FirstName":"vani",
		"LastName":"Jain",
		"Age":"47"
	})
db.students.find()

//remove command
db.students.remove({"_id" : ObjectId("6088422aeaa6dff64978907f")})
db.students.find()

//aggregate data
db.students.aggregate([{$group :{ _id:"$Age", Myresult :{$sum:1}}}])

//delete
db.students.deleteOne({FirstName : 'Anchal'}); // to delete one document with the similar first name
db.students.find()
db.students.deleteMany({"FirstName" : "Isha"}); //to delete many documents with the similar first name
db.students.find()

//delete collection
db.students.drop();

//delete database
db.dropDatabase();














