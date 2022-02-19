/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
class Section {

    //Section Index 
    Section_Index = 0;

    get HtmlcodeSection() {
        return `
       <section id="section${this.Section_Index}"  data-nav="Section ${this.Section_Index}" >
       <div class="landing__container">
          <h2>Section ${this.Section_Index}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
          
          <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
          </div>
          </section>
          `
    };

    // Create section and adding it to the Page 
    CreateSection() {
        this.Section_Index += 1;
        document.getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', this.HtmlcodeSection);
    }

}
class Navbar {
    ElementOfmenu = document.getElementById('navbar__list');
    buildMenu() {
        this.ElementOfmenu.innerHTML = '';
        document.querySelectorAll('section').forEach(element => {
            this.ElementOfmenu.insertAdjacentHTML('beforeend', `<li><a class="menu__link" href="#${element.id}" data-section-id="${element.id}"  >${element.dataset.nav}</a></li>`);
        });
        this.jumpTosection();
    }

    // Jumping to the section 
    jumpTosection() {
        this.ElementOfmenu.addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById(event.target.dataset.sectionId).scrollIntoView({ behavior: "smooth" });
            TheActiveClass(event.target.dataset.sectionId)
        });
    }
}
// Go up to top 
function go__up() {
    go_up.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
        })
    });
}

// The active class
function theActiveClass(id){
    //Adding active link
    document.querySelector('.link__active')?.classList.remove('link__active');
    document.querySelector(`[href="#${id}"]`).classList.add('link__active');
    
    //Adding Active section
    document.querySelector('.your-active-class')?.classList.remove('your-active-class');
    document.querySelector(`#${id}`).classList.add('your-active-class');
    
    //Update Locatoin Hash
        setTimeout( () => {
        window.location.hash = id 
    }, 0);
}
window.addEventListener('scroll', () => {

    let scrollPrecent = ((window.innerHeight + window.scrollY) / document.body.offsetHeight) * 100;

    //Show and hide the scroll to top button
    if (scrollPrecent > 40) {
        //here is show
        go_up.classList.remove('display__none');
    } else {
        //here is hide
        go_up.classList.add('display__none');
    }
    document.querySelectorAll('section').forEach(element => {
        if (CurrentSectionShow(element, -300)) {
            theActiveClass(element.id);
        }
    });

});
//Define Global Variables
const section = new Section();
const menu = new Navbar();
const go_up = document.getElementById('scrollToTop');

// End Global Variables

//Adding New Section
function CreateSection() {
    section.CreateSection();
    menu.buildMenu();
}

// Calling the function from here
section.CreateSection();
section.CreateSection();
section.CreateSection();
section.CreateSection();

menu.buildMenu();
go__up();



