
class Faker {
       constructor() {
              this.info = faker.helpers.createCard();
       }

       fakeName() {
              document.querySelector('#name').value = this.info.name;
       }
       fakeEmail() {
              document.querySelector('#email').value = this.info.email;
       }
       fakePhone() {
              document.querySelector('#phone').value = this.info.phone;
       }
       fakeCity() {
              document.querySelector('#city').value = this.info.address.city;
       }
       fakeZipcode() {
              document.querySelector('#zipcode').value = this.info.address.zipcode;
       }
       fakeCountry() {
              document.querySelector('#country').value = this.info.address.country;
       }
}
var btnGen = document.querySelector('button');
btnGen.addEventListener('click', () => {
       var fakeData = new Faker();
       fakeData.fakeName();
       fakeData.fakeEmail();
       fakeData.fakePhone();
       fakeData.fakeCity();
       fakeData.fakeZipcode();
       fakeData.fakeCountry();
});


