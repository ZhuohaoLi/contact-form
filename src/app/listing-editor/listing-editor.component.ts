import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-listing-editor',
  templateUrl: './listing-editor.component.html',
  styleUrls: ['./listing-editor.component.css']
})
export class ListingEditorComponent implements OnInit {
  public listings=[];
  errorMessage:string;
  constructor(private _listingService: ListingService) { }

  ngOnInit() {

    this._listingService.getListing()
      .subscribe(
        // if data returned
        data => {this.listings=data, this.asdf()},
        // if data is error of does not exist
        err=>{console.warn(err), this.errorResponse()}

        )
  }
  asdf(){

  }
  errorResponse(){
    this.errorMessage = "sorry bal bla bla"
  }

}
