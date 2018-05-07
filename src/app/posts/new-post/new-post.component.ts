import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {


  // objet formulaire qui correspondra au formulaire du template
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,//pour creation du nouvel utilisateur
    private router: Router)//pour rediriger utilisateur apres creation du user
  { }

  ngOnInit() {
    this.initForm();
  }
  //methode pour initialiser le formulaire en creant l'objet postForm de type FormBuilder qui est une methode qui retourne un FormGroup
  initForm() {
    this.postForm = this.formBuilder.group(
      {
        titlePost: ['', Validators.required],
        contentPost: ['', Validators.required],
      }
    );
  }
  //methode appelé au submit du formulaire...sans argument
  onSubmitForm() {
    //recuperation de la valeur du formulaire dans formValue grace au formControlName
    const formValue = this.postForm.value;
    const newPost = {
      title: formValue['titlePost'],
      content: formValue['contentPost'],
      loveIts: 0,
      created_at: new Date()
    };


    //on ajoute post dans posts du service avec addPost
    this.postService.addPost(newPost);
    //on redirige l'utilisateur vers /posts le composant PostListComponent
    this.router.navigate(['posts']);
  }

}
