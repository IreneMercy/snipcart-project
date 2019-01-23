<template>
        <main class="main-content ">

        



    <div class="page-top">

        <div class="page-top__inside content-wrapper">

                <h1 class="page-title">Get in touch with us!</h1>



        </div>


        <div class="page-top__overlay"></div>

    </div>



<div class="normal-content">

    <div class="stretchable-section" data-stretch="1251">
        <div class="content-section">
            <div class="content-wrapper clear">

                <div class="col-2">

                        <h2 class="contact__title content-section__title">User feedback:</h2>
                    
                    

                        <div class="content-section__rte rte">
                            <p>To provide feedback and suggestions, you can <a href="mailto:geeks+suggestions@snipcart.com" title="Contact us">send us an email directly</a>.</p>
                        </div>

                </div>

                <div class="col-2">

                        <h2 class="contact__title content-section__title">Other inquiries:</h2>

                        <div class="content-section__rte rte">
                            <p>If you haven't found answers to your questions in our <a href="faq.htm">FAQ</a> or our <a href="docs_snipcart_default_2.html">documentation</a>, feel free to use the form below:</p>


                        </div>

                    

<div id="contact-form-notices" class="contact__form__messages"></div>

<form id="contact-form"
      class="contact__form"
      action="https://snipcart.com/app/Ajax/ContactForm"
      data-waiting="Your message is being sent"
      novalidate=""
      method="POST"
      data-confirm-message="&lt;p&gt;Your message has been sent.&lt;/p&gt;"
      data-error-message="&lt;p&gt;An error occurred, please try again later.&lt;/p&gt;"
      data-sending="Your message is being sent"
      data-notices-elem-id="contact-form-notices">

    <div class="contact__form__inputs clear">

        <input type="text"
               id="Name"
               name="Name"
               class="contact__form__input--text with-placeholder required"
               data-placeholder="Name"
               placeholder="Name"
               title="Name"
               data-msg-required="Mandatory field"/>

        <input type="email"
               id="Email"
               name="Email"
               class="contact__form__input--text with-placeholder required valid-email"
               data-placeholder="Email"
               placeholder="Email"
               title="Email"
               data-msg-required="Mandatory field"
               data-msg-invalid="This email address is invalid"/>

        <textarea cols="15" rows="15"
                  id="Message"
                  name="Message"
                  class="contact__form__input--textarea with-placeholder required"
                  data-placeholder="Message"
                  placeholder="Message"
                  title="Message"
                  data-msg-required="Mandatory field"></textarea>

        <input type="text"
               id="PersonDescription"
               name="PersonDescription"
               class="contact__form__input--text"
               data-placeholder="Person description"
               placeholder="Person description"
               title="Person description"/>

        <input type="hidden"
               name="TimeStamp"
               value="2QJ8k/kRUg7D8732dDNwXpzywhTYlaZpBybmFQi2TNg="/>

        <input type="hidden"
               name="To"
               value="xkckx849@incoming.intercom.io" />

    </div>
    <div class="contact__button__wrapper">
        <button type="submit" class="contact__button rounded-button">Send</button>
    </div>
</form>

                </div>
            </div>
        </div>
    </div>

    

    <div class="stretchable-section announcement">
            <div class="announcement__text"><p>Join 6500+ developers. Testing is forever free, no credit card required.</p>

</div>

            <a href="https://app.snipcart.com/account/register" class="rounded-button announcement__button">Sign up free</a>
    </div>


</div>

    </main>
</template>
