import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-listing-editor',
  templateUrl: './listing-editor.component.html',
  styleUrls: ['./listing-editor.component.css']
})
export class ListingEditorComponent implements OnInit {
  listings=[];
  errorMessage:string;
  constructor(private _listingService: ListingService) { }
  newListings={
    userId: 3,
    id:5,
    title:"hello",
    body:"world"
  }
    
  
  ngOnInit() {
    this._listingService
        .addListing(this.newListings)
        
    this._listingService.getListing()
      .subscribe(
        // if data returned
        data => {this.listings=data,this.listings.push(this.newListings)},
        // if data is error of does not exist
        err=>{console.warn(err)}

      )
    
    console.log(this.newListings);
  }
  
  errorResponse(){
    this.errorMessage = "sorry bal bla bla"
  }

}
