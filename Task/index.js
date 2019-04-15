import BackgroundFetch from 'react-native-background-fetch';
export default class Task{
    static async doStuff(){
        console.log("Test the headless Task");
    }

    static async doAnotherStuff(){
        console.log("Another Test but now registering the task");
        BackgroundFetch.registerHeadlessTask(Task.doStuff);
    }
}