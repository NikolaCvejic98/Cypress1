class CreateGallery {

    get galleryInputParent() {
        return cy.get('form-group')
    }

    get trashGallertBtn() {
        return this.this.galleryInputParent
            .find('button')
            .first()
    }

    get arrowUpBtn() {
        return this.galleryInputParent
            .find('button')
            .eq(1)
    }

    get arrowDownBtn() {
        return this.galleryInputParent
            .find('button')
            .last
    }

    get arrowBtnEq() {
        return cy.get('i').eq(0)
    }

}