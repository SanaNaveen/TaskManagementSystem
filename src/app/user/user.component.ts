import { Component, computed, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';


interface User {
  id: string,
  avatar: string,
  name: string
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  // @Input({required : true}) id!: string;
  // @Input({required : true}) avatar!: string;
  // @Input({required : true}) name!: string;

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

  @Output() selectedUser = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'users/'+this.avatar();
  // });

  ngOnInit(): void {
    
  }

  onSelectedUser(id: string) {
    this.selectedUser.emit(id);
  }

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  
  

}
