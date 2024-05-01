import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { Contact } from "../interfaces/contact.interface";

@Component({
  selector: "app-contact-card",
  templateUrl: "./contact-card.component.html",
  styleUrls: ["./contact-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCardComponent implements OnInit {
  @Input()
  contactCardInfo!: Contact;
  constructor() {}

  ngOnInit(): void {}
}
