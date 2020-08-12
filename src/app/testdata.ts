import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{
    createDb(){
        let bookDetails = [
            {id:100 , name:'Angular by ABC' ,category:'framework1'},
            {id:101 , name:'Angular by DEF' ,category:'framework2'},
            {id:102 , name:'Angular by GHI' ,category:'framework3'}
    ];
    return {books:bookDetails};
    
    }
}