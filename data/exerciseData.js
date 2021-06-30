const exerciseData = [
  {
    id: 0,
    muscle: "Abs",
    exercises: [
      {
        id: "00",
        name: "Forearm Plank",
        desc: "With forearms flat on the floor and elbow directly beneath the shoulder, hold a straight back position with your feet extended behind you. Hold this position for as long as you can keep your back straight.",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hdm119918mh15842-1545237096.png?crop=1.00xw:0.752xh;0,0.248xh&resize=1200:*",
      },
      {
        id: "01",
        name: "Bird Dog Crunch",
        desc: "Start with your hands and knees in tabletop position. Extend your left arm forward and riht leg backward, maintaining a flat back with hips in line with the floor. Squeez your abs and draw your right elbow and left knee in to touch near the centre of your body. Reverse the movement with opposite pair of limbs. Repeat this movement.",
        img: "https://media1.popsugar-assets.com/files/thumbor/5HiGtqqgsmIbSDpYioZuy6fmNxk/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-:fill-!white!-/2018/07/02/643/n/40863086/27658c9b97e22814_Bird-Dog-600x600/i/Bird-Dog-Crunches.jpg",
      },
      {
        id: "02",
        name: "Plank with Spinal Rotation",
        desc: "Start in a high plank position. Rotate your entire body to the right into a side plankso your right shoulder is directly diectly above your right wrist and left hand is facing straight up. Pause for a second and return back to previous position to repeat on the other side.",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEREREREYEREREhERERESEhESEhESGRgZGRgZGRgdIy8lHB4rHxkYKTgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHRISGjQjIys1NzE0NDE3NDQ0NDQ9NDcxNDQxMTQ9NDQ0NDo0NDQ2NDQ0NDQ0NDExNDQ0NDQ0MTQ0NP/AABEIAOcA2wMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIHBAUGAwj/xABLEAACAQIDBAUIBgcFBgcAAAABAgADEQQSIQUGMVEiQWFxkxNTgZGSodHhFjJSscHSBxQVQkNywkRilPDxIzNUc6KyJDQ1goOE4v/EABkBAQEBAQEBAAAAAAAAAAAAAAABAwIEBf/EACgRAQACAgEDAwMFAQAAAAAAAAABAgMRIQQSMTJBURMicRRhgZHwQv/aAAwDAQACEQMRAD8At+MRRiFShCaTbO82GwrBHZmqEXFOmud+y/UImYjmViJnw3cJz2xt7cNin8muZH6lcWBPIHnOhki0T4JiY8iOAhOnIhCEAhCEAhCEAhCEAhCEBQjigEIQgEIQlETFGYoUjIyUUgkI5GMSDXbx7SOFwmIxCi7U0JQWuM7EKtxyzESh6GOqVajmoxd6hLO7Mfrd54+i3pn0HjcMtWm9J9VdWQ9drjj6JUO1d2Fp1irA03R0cEG6OpJylfZPdaY5Z158NsMbnUeXJYjFvhnBBZW7MwcHs0FjNrR2tj8aq3qVKzqchPlGpotrG4IspPPr4d02G1aFM9F/qPa2typ1J48BPXZtanSFkK5V6IsRwE885I7eIeuMO7czw9k2ftFgpfFFbCwVq1V1PA34DW4Gus3+A25jaGhC1xmRWzs3RXKB9a54kHj1sbXmBRxwJFm07DMplSqRfRhwddG011HX98Y80ROrcOr4I06alvRcAtSIBGutiOzrF/TN3gsalVAyHmCpsGBHURKvxj1KLhWOa4Lqy6C2oue34cjPBcbmsW6QA6wDrc2PdYD1ifQrWJ5idw81sMT4jS0qu1sOoJNZDZS9ldWYqCRcAHXUEd4tOf2lvzRpWtTY3JHSIWxHUbX1nCpiBqdVDXawGgu2lhztbWavbjlqQbrUhrdXGx/7h6hNa0ruN8rjwV3HdysrZ2/tCoQHQoD+8rZ7dpFgfVeddQxCVFV0YMrAFWBBDDmCJ82UMUVN7zeYHeOpSHQqvTvqcjlQTzKm4vNrYKzzWdN79HWeaTpfkJSA30xQ4Yqr6fJN96me9Lf3GL/ac3Y9Cn94t+Eznp7fMMJ6K/tMLohKerfpAxrCwq0kuOK03zDuzAiamvvRiWdXfG1WysrZEJRSQb9RAtpwyyfp7fMEdFk95he8JVewt8Kteoy52QKhcnMX6wALHv8AdOmp7xVB+8rfzqU94nkvk7LdtuJcW6W8OuinNLvQR9agT2o6t7uMlU3iYgFUIv1EEte5Fvdy65xPUUiNsbY7Vjcw6OEwMLtJH0Y5WP1RrqMoJ9+b1TNRgQCNQQCDzBmtL1tG4nbgRSciZ0pGRjhAI5G8d5BKa7amx6OJW1QG4UqrKzKy31uOom/MHr5mZ5a2p0A1JPVOT2vvWVfJhsrBT0qjC4bsUcu3r6uck8+ViZidwxtkbiKtd6uLda6rmWhS1K5T++97Xa37o0Gup0ttsduZgKlNk/VkplhYVKYyOh6iD2cjoeuaE724rmnsfOeT74YodaDtya/fOYrWI1EOptaZ3MuJ29s/E7Mrmk7F0bWjVAYLVHYNbEdYvp3ETZ7u7QapTzuemGbNyBHC3ot65s9p714qohQ08PXBv0ay2XUWOlj1Tm9lZqSOXyqWZ3IQkoi6AKCdTw69dZhmx0iNxHL14ctpnUyjtvalsQFJuBTAIvzY9XomOm0VJOV9bW4cFvp6NTpMd8FTrVGeo5Rj9ioracBxXTS3zkjsCiTdcUw5XVSR6RaenHPbSIZ2zfdOmQmMUXsfcdAOo9liZHHYpWpuubUqbDK2v7w99/8AJkBsRBe2L42/h8R266yD7DUi365/Lai+n/Xfl6ppFz62mlDiIvO92iMFXOaph6Ac6l6SVaBYniSEYAk9oM07bDwRNxUcDlnH4rNvrx8NI6qJ8w5rNEag6zOvw+yMAv1l8p/zKlYf9jLN9gMdhKFvI4TCKRpnNEu9v52YsfXJOePaEnqfiFaUM9S4poznkis5906PAblbSrarhHRftVitH3MQ3ulg099HAAUUVtpojgW7s0kd96nOl7D/AJpzOezieqv7OT2RubtXDVS36qGVkKErXoW6mvqw5W9M3ybD2keOFt31qGvqYzOG/FTnT9h/zQO/FTnT8Op+aebJSuSe63lz+oyfs8W2FjwP/Lhv5a1K/wD1ETAwmMbPkZfJujunTsrZ0cowW31rMpGmnrE2Y35qf3PDqfmnEb27VNaurouRrMzNTpMOmxGoYm6mw1IvfN1TKcFfbyfWvbjhYWExIFenbgGXW1r62PdxnU7HqZ8Nh316dCi+vHVVOsrXdqt5V8OXazl0DC7AsFuATfsJax5jrAnQ7C3kFNKdCvl8nTRKa1EVgQEUKCy3N726vVJ00RXcR/P5eWIdrIyFOorAMrBlYXDAggjmDJXnrdCK0LwvA8LnnI1XyKzkmygsbAsbDU2A1PcJMLGBOdKr3eDbOJxJKU6dWnQ+z5KrmqdracP7vrv1c82Gr+bqeDU+EuUDtko0bUo1GuP4VTwqnwioU2zdOhWfsp034W5FefbLstHaSa7InSnVZB/YcT4NQk/CaraOFxdVrUsHiES2ubD1iSergvCXtlEkFnP0o3tpOWdafPQ3exnH9Xrj/wCpiPhJfsHGD+FX/wAPWH4T6DtCd6Z7fPw2PjB/Cq+mjW/LJDZmL81U8Gt+WfQEI0bUB+zMX5l/TQrflgNl4sfwH8Cqf6Zf8I0bUKmz8WP4D/4ep+Wey4XEj+zv/h6g/ol6QjRtSSUcSP7O/g1Pyz3RMR5h/Bqj8JdEjGjamwlfzD+HU+EMtb/h6nhVfyy5LwjRtThp1zww1Twq35J41cHijwwlQ9+HxJ/pl0QjRtSWFw+0ab5hhmA1sfI7QZlJ6wGYpfty6dVpsaeFrWGahVB/5Fcf0y24XkisR4RXWyNpYjCmwoVnpk9Kn5CsR2lej0T987zAYtKyB0VlB0y1Kb03U9YKsAZkkxEzpQTFeImK8CIVuQ9fykgrch6/lPQRiREArch6/lHlbkPX8pOSgeWVuQ9r5R5W5D2j8J6iEo8srch7R+EMrch7XyntMehjKbsyowJQ2a3C/f1yTJzKeVuQ9r5QytyHtfKe0IR42bkPa+UMrch7XyntCB45W5D2vlDK3Ie18p7QgeNm5D2vlCzch7XyntCB5WbkPaPwhZuQ9o/CekJR42bkPa+UMrch7R+E9oQPGzch7XyhZuQ9o/CesIHlZuQ9fyiytyHr+U9jFA8crch6/lFlbkPX8p7whWPlbkPX8osjdnrPwnuYoCEYiEYnKpwhCVBHFHKPOpWVbAsAW0UE2ueQ7Zz2D6L8dGdRoevOpufQLToa9JXUqwuCPV2znq9N6dUKSMoZGFgdUvr3HS0wy7iYlth7dTHu6eEQhNmBwihAcIoSghCEAhCEAhCEBQhCAGIxxQCEIQqMIQlCEICE4VOEjJSoIxFCUOafbY6dM81cerKR+M3E023jrS/9/wDTMs3olpi9cNlgamamrdgHq0mRNVsN+iy/ZYH0H/SbSdUnurEuMle20wcIoTtycIoQHCKEAhCEAhCEAhCEBQhCFEIQgRhCECMcUc5U5KRkpUEIQlDmr28gNIN1qy29PR/H3TZzWbfe1IdrqO+1z+EzyemXeP1R+XhsQ9Nv5R7iJu5odin/AGnejfep/Cb6TF6XWf1yIQimrE4RQgOEUIDhFHAIQhAIo4oBCEIUQhCASMIpQoxFHOdCcJESUCD1AoLMQqgXLMQABzJMwsLtvCVXyU8TTd+pVdST3c/ROY3wfymLo4aoSKCUv1h14LVdmKLm5hcpNubDkJrmRXZU8mj0NSXvYp0RlyEWIYm+t9ABzmF83bbWm9MHdXu2sic9vNUu1JAeGZz2cAP6pDYm0Ch8lVrZ0b/dvVb/AGmb7JbgewzVbybTp/roQVFutIK4JACtmYgX52OsZL92OZhcWOa5dS3ew1PlCT1IfXcfhN/OJ2fttKbasLgW0uwI5aTp8DtWjW0V+lbVWBVvRfj6J1h32+Jc56z3bZ0I4pswEIQgEIQgEI4QFCEIBCEIBCEICMUZilUoQhAIQhOQ5KRjEo0+39iLiQrKcldARTY/VZTYlH5qbd44jrB5FsC9EZGR0IZmdmZnzZmu5DcDe+jdWbqJtLGml3z/APTsYLXDUKiEdjDKfvmWTHFufDXFlmk68uErY0VK1NEGSnTJsLfXPDh9nUzJNBA7BlLBlYAEBtT3/jKu2DVqJiUpq5KHMWQk2sATpyN+sSx8NjBTTOeu4C9fonltitExrl78V+6szPDWByp1NjexHb2e+ZFLaDA2+sVva3HQ8QdLHTnMPEVblmNlBYsRwyjVvULHjI4c63PHKGNj1npfiPXPqQymNu52HvaVGTEBiotaoNWHYw6/ROzoVlqKHRgysAQRKbNRh13vfu9Pr+cydn7UqURnpuVYCzFbAtoCMw4Nx65Jrvwwth3zC34Th9nb6toK6BhwzJ0Wv/KdLaTqtnbVo4hb03BI+sjWDr3rfScTWYYzS0eYZ0IQhwI4oSBwihAIQhAIQhKEYjJSBhRFGYoBGIo5yHGIhGJQ5i7SSm1JxWIWnYly5AUDmSdNOPoEyp4YzCU6yhKih1DBsp4XHCSRSOysBRXaFd6Sk0VzigzKwBXPluL/AMpHPomZ+KrU1qFQQLgnu4Xv2Wnd7e3fprSqVk0ZKaC2gAp078ANNFJHco7b8xstETF4Z1UC1RUY2F2V+i1+fGeaLTTLEvfjtE4517OexlRbGxFzpe+lrgj7j/m886TglwDxHAWsb9FbW4/VPrlt4/dPAV2LVMMuYm5KM9K55nIRecxtv9HqrepgGKtlsaDsWDEXsVdjcHpH6176az2xdjGaJckalxob6hF69BcN93uHVpPFHsr8ukerkpufXJVUZCUZCjU84KHijcCCO65/1nktzUI+2luZDcD+E7awyUrkMw+0L20twA4ntmlXa7is1RHZRmsjKxBCroCDxFwL+mT21ivJ01sSHqIKY11GgzN6ieH2hNJSfQjl901xTqW2LzMrc3X39zFaeLNwbAVrWK/zgcR2j085YisCAQbgi4I1BE+ZadUqbgyyNw98wmXD4hrUjojN/CPIn7J93dwmTFE818/DLP08THdSOfhakcQjnlfPKEcUAhCEAiMcJRExRmKFBkYzFIJCEBCQMSUiJKAQhCUYm1KebD11+1SqL61Ilc4Qjy+G682Iw49GdZZWNqZKVR/sIzeoEytsAQuIwqjU/rFG3dmH3C88+WPuq9WCfsstAwhImeh5Gg3m3bp4xCQAlddUqDTNYWyuRxUjTW9uI5Gq8fhKmFqZMSnk2QXu31XFjcoRoy3PG+nXa0vG8x8dgqVdGpVqa1EYWZXFx8j2idROmlMk149nzZjKvlahciyjRE5Lfie08Z4sOWndLN29+i1wS+AqgqdfI12IK/yOAb9WjAd84LauwsZhbnE4V6aj9/Lnp+2t1989FbV1w99MtJjUS1y1SDZvX1TIRyDdTMTODEjleGoncW00i+lu7hb6AKuHxT2UAClWY6KPsueocm9B6pZisCAQbg6gjW4ny/SxJXUaTp93d9sRhLKrBqXm2uV716we6Z3xxbmvEvPl6et57qTqfhfcU5bdnfShjW8nlNKrlzZScykcNG59hA9M6qeeYmJ1LxWpas6tGihHFI5EIQlETFGYpFKKOKA44CEgclIiSgIRwhKPOtTDI6ngysp7iLGVbu6C+OwiEdJHYt2ZEYn3iWt1Sudy6OfaVZ7dGmtVr8mdwo92aYZI3aG+KdVssaRMkYrTdghC0nlhllRCBEnlitA57au5ezcUS1XCIHJuXp5qLk8yUIzem843bX6JEKlsFiWVhqKeIsyN2B1AK+kGWjaERaYd1vaviXzNtbY+JwlQJiaDUmN8ucAo4GnRcaN6DI4PDPUV2Qapbo8c3dPpDamzqOKpPRxFMVabcVbqPUQRqpHMazgNpfoxZLnAYkBblhRxAOh7KiC/rUntltltFftjl6KZ4/6ctuvWFBCx0Z2uWB6SAaAEcuJ9MtHd/eJagWnUYBjorX0bsJ5ytMbuptSmczYQ1LcXo1EqH3HMfSpmvXaVXCkeWpVKQJtlr0npXPYWAue0WnitbJFpt8tLWpkjUy+gYTh9398U8iWrFmRLDOqs7rrazKBfTnNzsPeH9brVEWiy0QgehiC6la4DZXso4WJHfeb1yRaOHitSazqW/hCE1ckYjJSJhSMVo4oEBUEl5QTwFODoQpKjMQCQtwMx5XPCcqeJxtOkjVKjBFXix+4cz2CcLtjeipWa1NmpU1PRCsVd+1iPu++eu1dj7RxL5nRQovkprUTKg7OZ7f8ASYR3Qxnm18RPjIMYbYq+eqeK/wAZ4YjbmItZKjsf79erl9kfGbD6IYz7C+Ik8xuhjMxHkrD7flKWU9n1r+6TW1idNRW2/iwcqt0CAGPlqiEnrsADp6ZHZW0Gps5DNTLlf93UZbKBoLi19ST6ZuzuZiz+4viJGu5eLH7ieKPhJFYidu5yTMaY37XfzlT01HP4yX7Xfzj+I3xmYu6GM82ni/KP6I4v7FPxR8J1y43DB/bFTqqP4j/GA21VHCo/eKrj8ZnfRDF/YTxB8Ijuji/Np4iSpwwzt2r5yp49T4w/b1bztTx3+Myvohi/NJ4qw+h2L82niLBwxfpBW86/jvE28Nbzz+M/xmWdzMV5tPEHwi+hmK82niLBww/pFW8+fFqSLbxV/Pnxanxmb9DcX5pPESL6GYvzSe2kHDAG8GI/4hvEqn+qeWJ2ziXRkNbOjAhkZ3ZWHIqWsR2TajczF+bT20h9CsX9hB/8i/CReHB0Eq0vKU84FCpUV2QEHLbja5vawGl9bTpU3iTBouHw7uGfXKAaj2NsxQFkyISDZmYXuCqsDeZ+I3AxT6FU8QfCYC/oxxSuXBXUKCPLC1lFhpl6hOZpEzH+/sm24iGzTbFVtRVqUwdcnl3qZOzNpfvmZgdu16T5jUaop+sjuzAjsJuVPaPfPHD7oYxABlRrc6o+EyfoxjPsU/F//M7Th2ezdp08QuZG1FsynR0PaOXbMy84OhsDaFNg9MIjrwYVdRzB01E7DZ71mT/xCKlQGxyPnVhzGmndKMsmF4iYoR5BpIGEJBIGO8IQGDGDCEoIQhICOEJQQvCEILwvCEKLwvCEAvC8IQC8LwhIC8V4QlBeBMIQIkxEwhARaRzQhIr/2Q==",
      },
      {
        id: "03",
        name: "Mountain Climber",
        desc: "Start in a high plank position. Tighten your core and bring your right knee to your chest. Return back to starting position and immediately repeat with the eft knee. Repeat these movements in quick succession as if you're fast climbing a mountain.",
        img: "https://i.pinimg.com/originals/10/d8/4b/10d84bb0cab8e2ea2b8622f37aa083f4.jpg",
      },
      {
        id: "04",
        name: "Leg Lift",
        desc: "Lie on your back on the floorwith your arms extended and on the floor by your side. Slowly lift your straightened legs up until they are at a 90 degree with the floor. Slowly lower them back down but don't touch your feet on the floor. Repeat again with controlled motion.",
        img: "https://i.ytimg.com/vi/Wp4BlxcFTkE/maxresdefault.jpg",
      },
    ],
  },
  {
    id: 1,
    muscle: "Back",
    exercises: [
      {
        id: "10",
        name: "Push-up Hold",
        desc: "Start in a standard push up position. Lower your body until your elbows are at 90 degrees to the floor and hold that position. Take a deep breath and come back up to repeat the same.",
        img: "https://static.vecteezy.com/system/resources/previews/000/162/096/original/man-doing-push-up-vector-illustration.jpg",
      },
      {
        id: "11",
        name: "Plank with Lateral arm raise",
        desc: "Start in a straight-arm plank position with hands shoulder-width apart. Keeping hips as still as possible, lift an arm up to shoulder height gradually, hold for a deep breath and return to center. Repeat with the other arm.",
        img: "https://i.pinimg.com/736x/f6/29/70/f629708057cb8a79777bd3941d718506.jpg",
      },
      {
        id: "12",
        name: "Superman",
        desc: "Lie flat on the floor on your belly. Keeping your head neutral and steady, try to lift up your arms and legs until you feel a contraction in lower back muscles. Hold for a couple seconds, lower your arms and legs, and repeat.",
        img: "https://t3.ftcdn.net/jpg/00/90/37/22/360_F_90372200_h7awCK6fKzl10zBX0L1FxJr2uANfGoxn.jpg",
      },
      {
        id: "13",
        name: "Reverse Snow Angels",
        desc: "Start lying facedown on the ground with arms at side and palms facing down. Keeping your arms extended, bring them past your shoulders until they are straiht up your head, then back to the starting position. Repeat this movement in a contorlled motion.",
        img: "http://s3.amazonaws.com/prod.skimble/assets/2132042/image_iphone.jpg",
      },
      {
        id: "14",
        name: "T Push-ups",
        desc: "Start in a plank position. Perform a push up and when you come up, rotate one side of your body up, raising your arm on that side straight up along with it. Perform the next pushup with rotation on the other side. Repeat the movement in a controlled fashion.",
        img: "https://cdn1.coachmag.co.uk/sites/coachmag/files/2018/07/dumbbell-t-raise.jpg",
      },
    ],
  },
  {
    id: 2,
    muscle: "Biceps",
    exercises: [
      {
        id: "20",
        name: "Single arm Bicep Curls",
        desc: "Take a sturdy backpack and fill it up with some heavy books. Stand straight with the bag's straps in your right hand and palms facing straight where you are facing. Now, curl your arm upwards while engaging your core and bring your hand as close to the right shoulder as possible. Extend your arm downward again. Repeat this movement for several repititions. Repeat again with the left hand.",
        img: "https://i.ytimg.com/vi/MHfGpQI3QOU/maxresdefault.jpg",
      },
      {
        id: "21",
        name: "Reverse Hand Push-ups",
        desc: "Get in a standard push up position and rotate your arms until your fingers point towards your toes. Move your hands a few inches towards your feet so that the arms are extended and you are comfortable. Engage your core and and hold the lowered position for a couple of seconds before coming up. Repeat in a controlled manner.",
        img: "https://qph.fs.quoracdn.net/main-qimg-44312e2edaabe1b7a98d70371bbdce0c",
      },
      {
        id: "22",
        name: "Chin-ups",
        desc: "Grip a high held bar with your palms facing inwards and your hands shoulder-width apart. Pull yourself up steadily with your feet crossed or starightened until your chin reaches the level of the bar while keeping your arms in line with your body. Lower down steadily and repeat.",
        img: "https://barbend.com/wp-content/uploads/2019/01/Chin-Up-Guide-e1554305774487.png",
      },
      {
        id: "23",
        name: "Hammer Curls",
        desc: "Take a sturdy backpack and fill it up with some heavy books. Stand straight with the each of the bag's straps in each one of your hands with palms facing each other and arms shoulder width apart. Now, curl your arms upwards while engaging your core and bring your hands as close to the shoulders as possible. Extend your arms downward again. Repeat this movement for several repititions.",
        img: "https://i.ytimg.com/vi/I3FXctMVCbc/maxresdefault.jpg",
      },
    ],
  },
  {
    id: 3,
    muscle: "Cardio",
    exercises: [],
  },
  {
    id: 4,
    muscle: "Chest",
    exercises: [
      {
        id: "40",
        name: "Standard Push-ups",
        desc: "Place your hands shoulder width apart and lower your body until elbows are at a 90 degree angle then push yourself back up. Pace should be controlled throughout the entire motion.",
        img: "https://lh3.googleusercontent.com/proxy/8k8beV_oZP4oh2S4XJ_CQa9gxXOpmXzBJhFuJ0QCV5DXsa83jHidY8duk53yuLAQ-d453vJgvCBCUZf-0AT_pQ2DyiXQ3_MeNtpKvudAj31_0VxSpMuhNOn2w4uJnk50cgBDCTHvkBc4_LyK2Td585JtNmFe10FSb5ynYf2gB8pEBR9Vg4VT2oEN9dKv3_FzkYMtpHNs3-i-",
      },
      {
        id: "41",
        name: "Wide Push-ups",
        desc: "Peform this as a standard push up, only with your hands placed wider than shoulder width apart.",
        img: "https://cdn.muscleandstrength.com/sites/default/files/wide-grip-push-up.jpg",
      },

      {
        id: "42",
        name: "Alternating shuffle Push-ups",
        desc: "Start with a standard push up. Then move your right hand adjacent to your left, and move your left hand more to the left side so as to get back to a standard push up position. Repeat the same, this time to the right side and then, keep alternating sides.",
        img: "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/gallery/31116/or_541d330d12563001121134-2__resized.jpg?resize=768:*",
      },
      {
        id: "43",
        name: "Incline Push-ups",
        desc: "Place your hands on an incline surface like a stair or a steady chair. With your feet on the floor, lower your body until your chest touches the inclined surface and then come back up to repeat.",
        img: "https://mindbodygreen-res.cloudinary.com/images/w_767,q_auto:eco,f_auto,fl_lossy/org/echznzk53kksoeqn5/incline-push-up.jpg",
      },
      {
        id: "44",
        name: "Decline Push-ups",
        desc: "Place your feet on an incline suface and your hands on the floor, shoulder width apart. Perform a standard push up movement.",
        img: "https://trainright.com/wp-content/uploads/2020/04/declinepushup.jpg",
      },
    ],
  },
  {
    id: 5,
    muscle: "Legs",
    exercises: [
      {
        id: "50",
        name: "Regular Squats",
        desc: "Stand with your feet shoulder width apart. Lower yourself by bending your knees and driving your hips back and then down. Once your hips go slightly below your knee crease, push yourself back up through your heels gradually. Repeat.",
        img: "https://1fsawj22yir9otqyf1vuai46-wpengine.netdna-ssl.com/wp-content/uploads/sites/32/2017/06/Screen-Shot-2017-06-22-at-3.25.47-PM-1024x640.png",
      },
      {
        id: "51",
        name: "Jump Squats",
        desc: "Stand in a usual squat position and lower your body by bending your knees and driving your hips back then down. When you're about to push back up, push from your heels and then jump back up to repeat this movement again in quick succession.",
        img: "https://img.mensxp.com/media/content/2017/Mar/what-are-jump-squats-and-how-to-do-them980-1488872448_1400x653.jpg",
      },
      {
        id: "52",
        name: "Jumping Reverse Lunges",
        desc: "Start in a standing position. Step your left foot back into a lung while keeping the right one flat, right knee bent and chest facing forward. Jump to reverse the position of the feet and repeat.",
        img: "https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2016/11/posh-pt-jumping-lunge.jpg?itok=sBxQfrVb&timestamp=1478796651",
      },
      {
        id: "53",
        name: "Calf Raises",
        desc: "Stand on the edge of a stair with a quarter part of the front of your feet on the stair. Keep your feet in line with your body, and slowly stand on your toes. Hold for a second and then come back down so that your heel goes slightly under the level of the stair. Repeat this motion gradually for several repititions.",
        img: "https://www.dummies.com/wp-content/uploads/101309.image0.jpg",
      },
      {
        id: "54",
        name: "Sumo Squats",
        desc: "Stand with your feet slightly wider than hip-width apart and position your feet to be facing diagonally outward. Push your hips back and squat down with your back straight and facing forward. Come back up while pushing through your heels and engaging your inner thighs. Repeat.",
        img: "https://cdn1.coachmag.co.uk/sites/coachmag/files/2017/12/sumo-squat.jpg",
      },
    ],
  },
  {
    id: 6,
    muscle: "Mobility",
    exercises: [],
  },
  {
    id: 7,
    muscle: "Shoulders",
    exercises: [
      {
        id: "70",
        name: "Pike Push-ups",
        desc: "Place both hands on the floro, shoulder width apart and your feet as well. Suspend your hips at the top so that your body forms a trianglewith ground as one of it's sides. Keep your head so your eyes face your feet. Now bend the elbow until your hair touch the floor, then come back up. Repeat this movement in a controlled fashion.",
        img: "https://www.oxygenmag.com/wp-content/uploads/2017/04/pilates-push-up-1.jpg",
      },
      {
        id: "71",
        name: "Dolphine Dive",
        desc: "Start with your forearms on the floor with your arms and feet shoulder-width apart and your hips raised so your body forms an inverted V. Engage your core and dive forward coming to a forearm plank. Reverse the dive and go back to the starting position. Repeat in a controlled fashion.",
        img: "https://i.pinimg.com/originals/91/2d/9e/912d9e81138ff4bd4ae1a21744993ee5.jpg",
      },
      {
        id: "72",
        name: "Lateral Raises",
        desc: "Fill up 2 water bottles as much as you can handle and hold one in each of your hands while standing with your feet shoulder width apart. Raise your arms to each side until they're at shoulder height and bend your elbows slightly. Lower your arms back to the side. Repeat in a controlled fashion.",
        img: "https://i.ytimg.com/vi/dr8ItbfGAVE/sddefault.jpg",
      },
      {
        id: "73",
        name: "Seated Military Press",
        desc: "Sit down on an elevated surface without back support and keep your feet on the floor, for ex: edge of your bed. Now, hold a filled up water bottle in each hand and sit with your back straight, elbows bent and level with your shoulders, so that your hadns are up in the air with the bottles. Palms should face forward. Now press the bottles above your head until your arms fully extend. Hold for a moment, and then lower them back to the starting position. Repeat in a controlled fashion.",
        img: "https://lifestylegeeky.com/wp-content/uploads/2019/05/Seated_Dumbbell_Overhead_Press-1.jpg",
      },
    ],
  },
  {
    id: 8,
    muscle: "Triceps",
    exercises: [
      {
        id: "80",
        name: "Close Grip Push-ups",
        desc: "Start with a standard pushup position, except with your hands placed slightly narrower than shoulder-width apart. As you bend your elbows to lower down, make sure your elbows don't flare out to the sides and remain tucked in to your body. Repeat in a controlled fashion.",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/img-2209-jpg-1571243143.jpg?crop=1.00xw:0.752xh;0,0.147xh&resize=1200:*",
      },
      {
        id: "81",
        name: "Tricep dips",
        desc: "Sit on a firm chair or edge of the bed with hands down on the edge, by your hip's eiher sides, and knuckles facing outwards. Extend your legs out and lift your body a littl so your hands support your body. Lower yourself down to a comfortable depth(below the surface level) and then squeeze your triceps to push yourself back upto the starting position.",
        img: "https://www.aleanlife.com/wp-content/uploads/2021/04/tricep-dips-at-home.jpg",
      },
      {
        id: "82",
        name: "Dead Stop Push-ups",
        desc: "Start in the standard push up position except with your legs joined together and hands slightly wider than shoulder-width apart. When you lower yourself, lower down completely so as to rest on the floor on your chest. Then lift yourself back up to the starting position to repeat all over again.",
        img: "https://787300.smushcdn.com/1494239/wp-content/uploads/2013/12/basic-push-up-e1427257869944.jpg?lossy=0&strip=1&webp=1",
      },
      {
        id: "83",
        name: "High-low plank",
        desc: "Start in a standard forearm plank position. Place right palm of on the floor, then the left palm as well to get into a high plank position. Then get the right arm down and left arm down again to get back into the same position. Repeat this alternately leading once with rthe right hand and the other time with the left hand.",
        img: "https://media1.popsugar-assets.com/files/thumbor/ZeV-NYnJKYWRHkHIB8bk2E-QQU0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/19/537/n/44223267/794d103807eaa3b0_Up-Down-Plank/i/High-Low-Plank.jpg",
      },
      {
        id: "84",
        name: "Diamond Push-ups",
        desc: "Start in a standard push up position except keeping your hands close enough so as to touch the tips of both thumbs and index fingers. As you lower your body, keep your elbows tucked in to your side.",
        img: "https://origympersonaltrainercourses.co.uk/files/img_cache/3981/500_1569414175_DiamondPushUp5.jpg",
      },
    ],
  },
];

export default exerciseData;
