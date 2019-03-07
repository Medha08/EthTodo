pragma solidity ^0.5.0;

contract ToDo {

    //@title This contract is to create structure of task and includes functions for CRUD
    //@author Medha Pandey

    event CreateTask(uint ,uint ,string ,string ,bool );
  
    struct Task{
        uint id;
        uint date;
        string content;
        string author;
        bool done;
    }

    uint lastTaskId;
    uint[] taskIds ;
    mapping(uint => Task) public tasks;

    //@constructor

    constructor()public{
        lastTaskId = 0;
    }

    //@modifier

    modifier taskExists(uint _id){
        require(tasks[_id].id != 0,"Invalid Task");
        _;
    }

    //@dev Create new Task
    function createTask(string memory _content, string memory _author) public{
        lastTaskId++;
        tasks[lastTaskId] = Task(lastTaskId,block.timestamp,_content,_author,false);
        taskIds.push(lastTaskId);
        emit CreateTask(lastTaskId--,block.timestamp,_content,_author,false);
    }

    //@dev Get a task
    function getTask(uint _id) public view taskExists(_id)
    returns(
        uint,
        uint,
        string memory,
        string memory,
        bool 
    ){
        return(_id,tasks[_id].date,tasks[_id].content,tasks[_id].author,tasks[_id].done);
    }

    //@dev Get all TaskId's for getting all tasks from frontend via getTask func
    function getTaskIds()public view returns(uint[] memory){
        return taskIds;
    } 

   
}
