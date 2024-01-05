import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/core/models/app.Equipment';
import { EquipementService } from 'src/app/core/services/app.EquipmentService';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit{

  
  equipments: Equipment[] = [];
  constructor(
    private equipmentService: EquipementService,
    private cdr: ChangeDetectorRef
   
    ) { }
  ngOnInit() {
   
      this.equipmentService.getEquipments().subscribe({
        next:(eq: Equipment) =>{
          this.equipments.push(eq);
          console.log(eq);
          this.cdr.detectChanges();
        },
        error: err => console.log(err)
      }
      );
    
  }

}
