document.addEventListener('DOMContentLoaded', () => {
  $('.services-btn').magnificPopup({
      type:'inline',
      callbacks: {
          beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
          }
      },
  });

  $('.mfp-btn').magnificPopup({
      type:'inline',
      callbacks: {
          beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
          }
      },
  });

  $('.modal-form-close').on('click', function() {
		$.magnificPopup.close();
	});

})