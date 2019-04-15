import BackgroundFetch from 'react-native-background-fetch';
export default class Task{
    static async doStuff(){
        console.log("Test");
    }

    static async doAnotherStuff(){
        BackgroundFetch.registerHeadlessTask(Task.doStuff);
        console.log("Another Test");
    }
}