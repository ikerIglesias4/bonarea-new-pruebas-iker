import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('This is init method');
  }

  simpleAlert(){
    Swal.fire('Hello world!');
  }

  alertWithSuccess(){
    Swal.fire('Thank you...','You submitted successfully!','success');
  }

  confirmBox(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete',
      cancelButtonText : 'No, keep it'
    }).then((result)=>{
      if(result.value){
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted',
          'success'
        );
      }else if(result.dismiss === Swal.DismissReason.cancel){
        Swal.fire(
          'Cancel',
          'Your imaginary file is safe',
          'error'
        );
      }
    });
  }

  errorAlert(){
    Swal.fire({
      icon: 'error',
      title: 'Oops..',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }
}
