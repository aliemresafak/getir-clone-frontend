import styles from "../styles/slider.module.css"
import CountryDropDown from "./CountryDropdown"
import SocialCircleIcon from "./SocialCircleIcon"
export default function Slider(){
    const logoUrl = "https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
    const socialFacebookLogoUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0IDEyQzI0IDUuMzcxODggMTguNjI4MSAwIDEyIDBDNS4zNzE4OCAwIDAgNS4zNzE4OCAwIDEyQzAgMTcuOTkwNiA0LjM4NzUgMjIuOTU0NyAxMC4xMjUgMjMuODU0N1YxNS40Njg4SDcuMDc4MTJWMTJIMTAuMTI1VjkuMzU2MjVDMTAuMTI1IDYuMzQ5MjIgMTEuOTE1NiA0LjY4NzUgMTQuNjU3OCA0LjY4NzVDMTUuOTcwMyA0LjY4NzUgMTcuMzQzOCA0LjkyMTg4IDE3LjM0MzggNC45MjE4OFY3Ljg3NUgxNS44Mjk3QzE0LjMzOTEgNy44NzUgMTMuODc1IDguODAwNzggMTMuODc1IDkuNzVWMTJIMTcuMjAzMUwxNi42NzExIDE1LjQ2ODhIMTMuODc1VjIzLjg1NDdDMTkuNjEyNSAyMi45NTQ3IDI0IDE3Ljk5MDYgMjQgMTJaIiBmaWxsPSIjM0M1QTk5Ii8+Cjwvc3ZnPgo="
    const socialGetirLogoUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvLSURBVHgB7Z1hjFTVFcfPfTNjKlKcWghUYHeMYiBRdgETibA4a1Jo7QcXbJqmwLJ+EGv7gV1MmkgsC9Q0jVZhvxilTVxk209FIGk1i6Q7FDQ0KWUgTdgItrOgKaRIManYyM7cnv+becPszJuZ9+5797230F+yzO4wA7P3f++55557zr2CIkpXen9y6vjUdiGonYTRSlKmvjHrQmrzsy8kZ874JMkvSVa95SoJ/pKUK32fozyNUYGy/HNWLOLnIoigiIAG/2p+WheRfFQIkZYkU5V/v6TtfXp63Us0ZcrnpIQoCsGCHGFhMixIjiJAqAIUG31qD3+MJ/iTpOu9bvXjb9Hq77xFPpPh0bInbDFCEWDd8vfS3Mv7GzW6xdPrX6KOpYdIMwcghljIjwETmADl3i7EJv4x1ez1U27/D/U+00/z552iwMC8UaDtLMQgBUQgAnSvOLxJEm2j2onTFjT+lt7nqGXORxQKAQqhVQDT1BjiTXLQ4ysJyOw0JwAhtAjw/fS7qUT+tp0kZBe5ZO13X6NVnW9TpBAswHUWQsNkbZDPsLnZkCgkTqo0PrydyDU+kNRDCRqRp/nRZ3wbAZhk7yxM6y+Q7CUFWmafoxe3/JAij6BdpdHgy8LOFwFMk1NIjJBLW28x/a6L5qQ7/euXaFKAueE6dfphkjyboB88cqjdNDmKjQ+wyJo0jQ8k/64wSX/jMIlHPI0A2Ht2LwfJAx1Lh9nreZnC4tq1O+jM2Xa69sVUuvzpzPLz6BAzeGS2zDnXOPwhqEc8wCtqReKkSMm330UewcQbNGjoo8dX0dE/r5rQ6PXAegQdZcnC92tHqqRBeYq+JtrU2kJpBPjZ+BpiPHUZ/bCN3n6nm0bPtpEqy3l9subxPbVCFKhPRQTXAvhhdgAm3ld/to6CAGZm/zsbaHhkDfmFbedRMEeuBMCEG4sbJ8kHglrtwsT8fOAVfpxFfgPT1Ltx68TRIGgRi5B1+m849oLganLj7ycfQO8PovHPf3wvvfCLN7Q0vvXvQ1xM4GUke0cnnXuEjgTAIsuLn19NEHa/3DjXppJOIO7AG9srn0qaLupJZ4FHRwJghUs+NT5YoDnEbJkd3Y1vcYYn9eE/VswvxXVCv5P3NhVgfcehHtXwgh1w53QuujDhBtn4FvvZu6oyRb28UNvQ7H0NBYDd5w1xR0o6peNhvbZ/aN+Ptdn8RqDxJ4wCIGlXs/mgoQAJeZuvpgeT7/z79Zmfv55aRseOr6SwsHFzk7zU3dnoPXUFgOkhKXvIRxa3fUA6Gdr3LIUJRgEWe1V08ShI13tP/RHgs+kBD/FSXhdHueeHYXqqGWPvq4YEvVnv9bYCmL3fR9MDdJsfTIJRwDbMwV4Rx4tsHRn7EaCh9y/Q2Pj4paPQ+8G/rtT5HAb1260NagTQ0fuBzvSSP3FkMypMcEUnkuTW7ql+snYEaOj9oFVjisno2YU0KYjRpuqnJgiwruMwNtJT5DPI89GV4xMl89MUzAVVHtEEAYTRfOWmgs7eb+t1RJn4xBBFWQBz1SvJdSqJEzACdHHGw+aKDrCN2YR05WRcFiCRj6VJEzpTDKNmfhx1torJuMIEGVrMD9A5As5HzAQ56mwGPXHjW7KCbs1TxVWZMkWPAA1cvtBwGGovmyFTAJ3mRycIPUeNlrkOzW2sON8WTZARe5T+j2dgflyYW7PNTQGklJ4zvMIgatl0rlb7RtHkGz3pkaQgmpQCAJ0TvFtcRXuLi7KkMT4+rr3xdbqKURkFitHedkMK/b3/c43eyoIga8gaoJRmY7AAQogUaeZTB/mXqqB+OAog2cA1BqVYAGolzYx9ch/pwqXnoQXlTA+eBwwqOEsg8gLydHQtmtD4YRf0KWd4c+c3yBApCoAzH+qL2a/q3EdhgcZXdgQEe0G8CNA+AgCKIHSBBlj1WPDFffB8PKVZSghAFIgAuvN1zJ7YPBTsG1YxuUeSvpep1qNOzoxvWEcbBDUhI73ejzVIYAKAv5xeRjqBR4RCb92g8Zf4lGQWqAAwQ7pDyPCIXnz+GS3mCKPL78KSWFtrNxKGvkIBcH38NkrEv9SaIwTunPZvc4F2+cos+uelFvIDFJLD5i+4/zT5yNVYW2oDytMDmYgBdrAe6/g9JRJfkk5QWrp0SYbt9EXz/1Qdeej13+v6NW3sfln9tK56CLoYW9ja3cPR0MA2VoMaBRbIyICLav1/qBtwIgZCy3jfRjY5Pvf6SrJxgbJ7GWw4Gmncugs1qkGDWvF6rMxhnpDSUlnIYRZn84iBufG9t9sh6bO4lDQW9Lll6IG/2vsTet67H60EGhpf88OOpHLnN3g3LEchUFNXdStSYAGEdF7T6jdIKZ90mW1+UqCsEY/HQxMApmhg93ZH5zXcpGSNwUznVRIiRyGB7cpdu3dEMsdHM+ZpvqWsiPwRChGzqHrXK7eWCMWTfIuhCCFjGQoZS4RbxhzhCGUqCRCLGYGfGGuHdbzALSFCnjJ4iOGPbG7Pf9tautM8LFIUMjBDJzhqOv2uS3T3rAt0k5IRbTSAb8rR0ALJgxQRzAMw2Dva/4doVD5WYq6ivY5QeeNMoRv1AbH4IEUMrBM2bx2KjEnC5xj63Y+8h1BK5geUBTDdUXnjL6ICRsPmrb+h3Ry6CFMI6wQWz40v6WDlcZcTNmQ4LLGdIgo2c8ISAlup1qlbPlT7D1b+UBOHW7/i8D+Iwp+Mm4HD81Y8PKy1+t7urLnXf9mlvu8sKScW0j2VT9UcW1mQcsAQYidFHIwIfGHDBedN2x4pqQgafnjkSRrOrJkQrkYeqsdN/xoLUzMCkK6eL+QxCgLbJfMLiDF/3mlTjNY551wJArMG9/fEqWV1j7Vc++Rr6vlHNr0f2G4FrO94r5c8jgKrt5zQnAnRCNSmtc7+iG7nzwEx7qjovcjY/oJ7OvJWL1+Z6eiErS2bnlM3eZKesruHoO5ejNe5wMoe2PzTIXP3abKDzgT7r0Sd3g/qpqXIgnyKPGDl7WMz+2bAYx1CXe+yrgBDx76Ja56UYkTIybHsL7b9gkiW0s1i1ToEQYONrkBpmJgVi13vI3J/UUF1xgO8lOVRuBPGA0ojQJr3DDRcWzUUYDDz7Rzboj5yyWKbxQrSOyarCJUj2iVN751pmpq49+jKQUnFyJ1T6uXRTFYRFHOYBpzcvuQoNzRuxLbxQ87Ja5stViBCGLn8XnB9sRBMz7h5b1pTHAmAQF3MuN5JDuaDuQ4Oq8CCJsh7A7yADuXqtBdp3uLa6fSSH8fZ0ZgP8uOFzmavcxqsQkHFqzvWBlpUocJyt9WPeVrt5nIfV+npv/1gZZYn5YbrAzcrRUxsuMQhqqMB6ZOuUtGx2l3kLs/KdX0AJmWOW9t6RqoHM1mjIfRUwQrM+i831Y+C+lSuPIyRAqfP7z3e1rL+M44Xfavy+btnXlAuXkAyLN7rNZ3cLxBKue+eUWcvRuM/oHanjpIAoCjCujEWoRwgmcEmxWv1iJVODiHMq6VCiCOh8Zc+lHH2YpidB+l1UsRzYnTpXhlcbZKCCUJ5kJ9gNGBDBGFi3aPC5R3GV9nV7HRr86vxJTO9J/1uKl9IjPAvkFKOGDYBmyQIbeP+r1ENJyWi0Tc6rXy84WrmyCO+lQZgI2e8kN+2c8faTboLLyDG6Ll2HhWP0Bner1U1U9aBsmvYC3PhAAxgkRWpyzwr+fjQ3J7Zsy70B5nkhd2s87yxMnbhXtNk4QBtu/Mp0DHQ6AvmZbnh/847Z8fcVMIga6TP78udtRTHmNd2xHgpLkjbUZgBc4B7fZ+OC521VieVLkAOdDT4Cmy9ML2cDGkikPKwSSjEVf6s21V9ezcEWp8XeSGkWTE6QAXexfJpkm1G0AWSJixEV2l+0OOzuidD2Dx5MPjUzFAEsChN1umSGGkKlgz39INB9nY7QhWgkrIYZAqClZa/xeMoSC+YPfwIL6IOhNnolURGgGrMw63jLEKBvwxzzsDhgklz/pBm1l515h4mTvjqaNgcf42hDpffm2UXMhuVBq/mf0fVfX+gvBW5AAAAAElFTkSuQmCC"
    return(
        <section className={styles.slider}>
            <div className={styles.left}>
                <img className={styles.leftLogo} src={logoUrl} alt="getir_logo"/>
                <h1 className="text-4xl text-white">Dakikalar içinde kapınızda</h1>
            </div>   
            <div className={styles.right}>
                <span className={styles.authTitle}>Giriş Yap veya Kayıt Ol</span>
                <div className={styles.phoneSection}>
                    <div className={styles.phoneInputGroup}>
                        <CountryDropDown />
                        <input type="text" placeholder="Telefon Numaranız"/>
                    </div>
                    <a className={styles.phoneButton}>Telefon numarası ile devam et</a>
                </div>
                <div className={styles.social}>
                    <div className="w-full mb-2">
                    <a className={styles.socialButton} href="">
                        <SocialCircleIcon url={socialFacebookLogoUrl} alt="facebook" />
                        <span className={styles.socialTitle}>
                            Facebook ile giriş yap
                        </span></a>
                    </div>
                    <a className={styles.socialButton}href="">
                        <SocialCircleIcon url={socialGetirLogoUrl} alt="getir" />
                      <span className={styles.socialTitle}> Getir şifresi ile devam et</span></a>
                </div>
            </div>
        </section>
    )
}