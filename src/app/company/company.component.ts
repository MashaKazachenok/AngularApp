import {Component} from '@angular/core';

export class Company {
  constructor(public title: string,
              public numberOfPersons: number,
              public country: string) {
  }
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent {

  public searchString: string;
  public searchCountry: string;

  company: Company = new Company('First', 50, 'USA');
  companies: Company[] = [];
  countries: string[] = ['Belarus', 'Russia', 'USA', 'Germany', 'UK', 'France', 'Italy'];

  addCompany(title: string, numberOfPersons: number, country: string) {
    this.companies.push(new Company(this.company.title, this.company.numberOfPersons, this.company.country));
  }
}
