import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any;
  title:string;
  comments:any;
  id:any;
  @ViewChild("response") response :any;
  @ViewChild("modal") modal:any;

  constructor(private postService: PostsService) {
    this.title="";
    this.getPosts();
   }

  ngOnInit(): void {
    
  }

  getPosts(){
    this.postService.getAllPosts().subscribe( (e) => {
      return this.posts = e;
    }, (err) => {
      console.log(err);
    });
  }

  addPost(data:NgForm){
    console.log(data.value)
    if(data.value.title && data.value.comments){

      const postBody = {
        title : data.value.title,
        body: data.value.comments,
        userId: 13
      }
  
      this.postService.writePosts(postBody).subscribe( (e) => {
        console.log(this.response);
        if(e){
          this.response.nativeElement.innerHTML = "<div class='alert alert-success'> le post a bien était envoyé !</div>"
  
        }
      }, (err)=> {
        this.response.nativeElement.innerHTML = "<div class='alert alert-danger'> une erreur est survenu !</div>"
        console.log("une erreur" + err);
      })
    }else{
      this.response.nativeElement.innerHTML = "<div class='alert alert-danger'> veuillez remplir les champs</div>"
    }
    

  }

  openModal(id:any){
    this.id = id;   
  }

  updatePost(data:any){
    console.log(this.id);
    console.log(data.value);
  }



}
