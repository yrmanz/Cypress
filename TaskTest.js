describe('TestSuite',function(){
    it('LoginandCreateBoard', function(){
        cy.visit('https://sprintboards.io/auth/login')
        cy.get('input.form-control[type="email"]').clear().type('sennderqa3@gmail.com') 
        cy.get(':nth-child(5) > .input-group > .form-control').clear().type('n*H7A7f@&ikbwu')
        cy.get('.btn-primary').click()
        cy.get(':nth-child(1) > .nav-link',{timeout:50000}).should('have.class','nav-link')
        cy.title().should('eq','Online Retrospective Tool for Agile Scrum Developers – Sprint Boards')
        cy.get(':nth-child(1) > .nav-link').should('be.visible').click()
        cy.get('.form-control',{timeout:10000}).should(($x) => {expect($x).to.have.class('form-control')})
        cy.get('.form-control').clear().type('My First Board')
        cy.get(':nth-child(3) > .custom-select').select('Sennder')
        cy.get('.w-100 > .btn').click()
        cy.title().should('eq','Create a Board – Sprint Boards')
        cy.get(':nth-child(1) > .flex-column > .d-flex > :nth-child(3)',{timeout:10000})
        cy.get(':nth-child(1) > .flex-column > .d-flex > :nth-child(3)').should('be.visible').click()  
      })

    it('Goal was achieved', function(){
        
        Cypress.config('chromeWebSecurity',false)     
        cy.get('input.form-control[placeholder="Required"]').type('Goal was achieved')
        cy.get('textarea.form-control[placeholder="Optional"]').type('Sprint was well planned')
        cy.get('button.btn.text-white.btn-success').should('be.visible').click()
        
    })

    
    it('Goal was not achieved', function(){      
        cy.get(':nth-child(2) > .flex-column > .d-flex > :nth-child(3)').should('be.visible').click() 
        cy.get('input.form-control[placeholder="Required"]').type('Goal was not achieved')
        cy.get('button.btn.text-white.btn-danger').should('be.visible').click()
        cy.get('.ml-3 > .btn').click()
        cy.wait(500) // this line cloud be removed when internet i stable for now let it be to complete the runs
        cy.get(':nth-child(2) > .flex-column > .card-deck > .no-highlighting > .react-contextmenu-wrapper > .card-body > :nth-child(3) > .d-inline-flex > :nth-child(2) > .btn').click()
        
        // RIGHT CLICK AND DELETE OPTION 1
        cy.get(':nth-child(2) > .flex-column > .card-deck > .no-highlighting > .react-contextmenu-wrapper > .card-header').rightclick()
        cy.get('.react-contextmenu--visible > :nth-child(2)').click()

        // CLICK ON X AND CONFIRM FOR DELETION
        //cy.get(':nth-child(2) > .flex-column > .casrd-deck > .no-highlighting > .react-contextmenu-wrapper > .card-body > :nth-child(3) > .d-inline-flex > :nth-child(2) > .btn > .svg-inline--fa').click({ force: true })
        //cy.get('button.btn.btn-danger').click()
   
    })
})