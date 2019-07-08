import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 

    quotes:Quote[] = [
    new Quote(1, 'yussuf', '“The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.”',new Date(2019,3,14)),
    new Quote(2,'nami','“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”',new Date(2019,6,9)),
    new Quote(1, 'yussuf', '“The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.”',new Date(2019,3,14)),
    new Quote(1, 'yussuf', '“The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.”',new Date(2019,3,14)),
 
    
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

    deleteQuote(isComplete, index){

    if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      
       if (toDelete){
        this.quotes.splice(index,1)
    }
  }
  }




  constructor() { }

  ngOnInit() {
  }

}
