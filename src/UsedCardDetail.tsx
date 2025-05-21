import React from 'react';
import {useParams} from "react-router-dom"
import './App.css';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { useState, useEffect } from 'react'


function UsedCardDetail() {
  const {cardname} = useParams()
  const [price_data, set_price_data] = useState({
    "detail":{
      "saved_at": "2025-05-10",
      "price": 1500,
      "title": "loading...",
      "category": "loading...",
      "region": "card"
    },
    "keywords": "keyword",
    "results":[
      {
        "saved_at": "2025-05-10",
        "price": 1500,
        "title": "loading...",
        "category": "loading...",
        "url": "https://lapisai.com",
        "region": "card"
      }
    ]
  })
  const [data_base64, set_data_base64] = useState(
    {"data_src":"/9j/4AAQSkZJRgABAQEAZABkAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAHgAoADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopr5CMQcHFADqK4fwxput6z4U0jVLjxlrKTXllDcSLHDZ7QzoGIGYCcZPrWr/AMI1qv8A0Ouuf9+bP/4xQB0dFc5/wjWq/wDQ665/35s//jFH/CNar/0Ouuf9+bP/AOMUAdHRXOf8I1qv/Q665/35s/8A4xR/wjWq/wDQ665/35s//jFAHR0Vzn/CNar/ANDrrn/fmz/+MUf8I1qv/Q665/35s/8A4xQB0dFc5/wjWq/9Drrn/fmz/wDjFH/CNar/ANDrrn/fmz/+MUAdHRXOf8I1qv8A0Ouuf9+bP/4xR/wjWq/9Drrn/fmz/wDjFAHR0Vzn/CNar/0Ouuf9+bP/AOMUf8I1qv8A0Ouuf9+bP/4xQB0dFc5/wjWq/wDQ665/35s//jFH/CNar/0Ouuf9+bP/AOMUAdHRXOf8I1qv/Q665/35s/8A4xR/wjWq/wDQ665/35s//jFAHR0Vzn/CNar/ANDrrn/fmz/+MUf8I1qv/Q665/35s/8A4xQB0dFc5/wjWq/9Drrn/fmz/wDjFH/CNar/ANDrrn/fmz/+MUAdHRXOf8I1qv8A0Ouuf9+bP/4xR/wjWq/9Drrn/fmz/wDjFAHR0Vzn/CNar/0Ouuf9+bP/AOMUf8I1qv8A0Ouuf9+bP/4xQB0dFc5/wjWq/wDQ665/35s//jFH/CNar/0Ouuf9+bP/AOMUAdHRXOf8I1qv/Q665/35s/8A4xR/wjWq/wDQ665/35s//jFAHR0Vzn/CNar/ANDrrn/fmz/+MUf8I1qv/Q665/35s/8A4xQB0dFc5/wjWq/9Drrn/fmz/wDjFH/CNar/ANDrrn/fmz/+MUAdHRXOf8I1qv8A0Ouuf9+bP/4xR/wjWq/9Drrn/fmz/wDjFAHR0Vzn/CNar/0Ouuf9+bP/AOMUf8I1qv8A0Ouuf9+bP/4xQB0dFc5/wjWq/wDQ665/35s//jFH/CNar/0Ouuf9+bP/AOMUAdHRXOf8I1qv/Q665/35s/8A4xR/wjWq/wDQ665/35s//jFAHR0Vzn/CNar/ANDrrn/fmz/+MUf8I1qv/Q665/35s/8A4xQB0dFc5/wjWq/9Drrn/fmz/wDjFH/CNar/ANDrrn/fmz/+MUAdHRXOf8I1qv8A0Ouuf9+bP/4xR/wjWq/9Drrn/fmz/wDjFAHR0Vzn/CNar/0Ouuf9+bP/AOMUf8I1qv8A0Ouuf9+bP/4xQB0dFc5/wjWq/wDQ665/35s//jFH/CNar/0Ouuf9+bP/AOMUAdHRXOf8I1qv/Q665/35s/8A4xR/wjWq/wDQ665/35s//jFAHR0Vzn/CNar/ANDrrn/fmz/+MUf8I1qv/Q665/35s/8A4xQB0dFc5/wjWq/9Drrn/fmz/wDjFH/CNar/ANDrrn/fmz/+MUAdHRXOf8I1qv8A0Ouuf9+bP/4xR/wjWq/9Drrn/fmz/wDjFAHR0Vzn/CNar/0Ouuf9+bP/AOMUjeG9WCk/8JrrnA/542f/AMYoA6SisXwfe3OpeC9Dv7yUy3VzYQTSyEAbnZAScDgcntW1QAUUUUAFFFFABRRRQAUUUUAFZura9p+iGFb2SYPPu8tIbaSZm24ydsascDI5960q5nxl4xs/CdrbJJNbLf3zGO0W6lEUWRjc7ueiLkE9zkAcmgC/J4o0WPQ4tZN+jWErBY5EVmLsTgKqgFi2QRtAzkHjiiLxRosuiT6wL9FsYGKTSSKyNGwIBVkYBg2SBtIzyOOa4orpul6X4U1SHVIdT0u01We41C/hIaPzZY5gZTtyFUSyY/2QR6ZqneOL46x4jtFebRBr9hdGSNCVlihWNZJVA+8oYA5HXyye1AHoNl4n0bULC7vYb0JBZ5+0+fG0LQADdl1cBlGOeR0o0nxPo+t+eLG7JaBQ8iTRPCyoc4ba4B2nBw3TjrXn+usPEp8XanogN7p/2GxiZ4BuW6eKZ5JAmPvkRsF47nFWdZuI/GOqaxN4amF2i+GbqzaeH7rTSspjjz/eAV8jqN3OM0AdppHizRNduTbade+bKI/NVWiePzI843oWUB1yR8y5HI9a2H/1bfQ159p2q2HiHxP4T/sZhINNtZ2vAqkfZlaNUET/AN1i2Pl6/IT2rrtX0u81Aq9truoacqIQUtUgYP7nzI2P5EUAUvAP/JO/DX/YLtv/AEUtdFXO+Af+Sd+Gv+wXbf8Aopa6KgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKRmCqWYgKBkk9qAForjUn1LxhqE0mn6hPp+j25Mcc0I+a5fuRn+Ef59rP/AAimo/8AQ16r+YrZ0ktJSszFVXLWMbr5HU0Vy3/CKaj/ANDXqv5ij/hFNR/6GvVfzFLkh/N+DD2k/wCT8UdTRXLf8IpqP/Q16r+Yo/4RTUf+hr1X8xRyQ/m/Bh7Sf8n4o6miuW/4RTUf+hr1X8xR/wAIpqP/AENeq/mKOSH834MPaT/k/FHU0Vy3/CKaj/0Neq/mKP8AhFNR/wChr1X8xRyQ/m/Bh7Sf8n4o6miuW/4RTUf+hr1X8xR/wimo/wDQ16r+Yo5Ifzfgw9pP+T8UdTRXLf8ACKaj/wBDXqv5ij/hFNR/6GvVfzFHJD+b8GHtJ/yfijqaK5b/AIRTUf8Aoa9V/MUf8IpqP/Q16r+Yo5Ifzfgw9pP+T8UdTRXLf8IpqP8A0Neq/mKP+EU1H/oa9V/MUckP5vwYe0n/ACfijqaK5b/hFNR/6GvVfzFH/CKaj/0Neq/mKOSH834MPaT/AJPxR1NFct/wimo/9DXqv5ij/hFNR/6GvVfzFHJD+b8GHtJ/yfijqaK5b/hFNR/6GvVfzFbml2Uun2QgmvZrxwxPmzfeOe1TKMUtJXKjKTesbfcXaa/+rb6GnU1/9W30NQaHP+Af+Sd+Gv8AsF23/opa6Kud8A/8k78Nf9gu2/8ARS10VABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU1/9W30NOpr/AOrb6GgDn/AP/JO/DX/YLtv/AEUtdFXO+Af+Sd+Gv+wXbf8Aopa6KgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK5DWrqbxLqjeHNOkZLWPB1K5T+Ef88lPqe//AOsVc8S6zcRSRaLpOG1a7HyntAneRv6f5B0tD0a30LTEs7fLEfNJI33pHPVjW0V7Nc736f5/5GE37R8i26/5f5lu1tYLK1itraNY4YlCoi9ABU1FFYt3N0rBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFNf/Vt9DTqa/8Aq2+hoA5/wD/yTvw1/wBgu2/9FLXRVzvgH/knfhr/ALBdt/6KWuioAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmv/q2+hp1Nf8A1bfQ0Ac/4B/5J34a/wCwXbf+ilroq53wD/yTvw1/2C7b/wBFLXRUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFZPiHXI9D08S7DNdSt5dtbr96Vz0H09auajqFtpdhNe3cgjhiXcx/oPc1z3h/T7nVdQPiXVoyszriytm/5d4j3/AN4/59BrTirc8tl+PkZVJu/JHd/h5l3w1ocmmxy32oOJtWvDvuZf7voi+w/z2reooqJScndlwgoKyCiiipKCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKa/wDq2+hp1Nf/AFbfQ0Ac/wCAf+Sd+Gv+wXbf+ilroq53wD/yTvw1/wBgu2/9FLXRUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABTX/1bfQ06mv/AKtvoaAOf8A/8k78Nf8AYLtv/RS10Vc74B/5J34a/wCwXbf+ilroqACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKR3WNGd2CqoyWJwAKWuP1e4m8U6s+gWMjJp8BB1G5Q9f+mSn1Pf/wCtg3CHM/IipPkXn0GWyN411db2VSNBspP9HjYcXUg/jI/ujt/+sV2dR29vDaW8dvBGscMahURRwAKkp1J8zstlsKnDlV3u9wooorM0CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmv/AKtvoadTX/1bfQ0Ac/4B/wCSd+Gv+wXbf+ilroq53wD/AMk78Nf9gu2/9FLXRUAFFFFABRRRQAUUUUAFFFFABRRXL/EG2kk8E6vdw399ZzWVjcXETWlw0JLrGxXJXkgEA4zQB1FFcP4hlvGbQDcvrA0V7ZzdvpYlM3nbU8veYsybMeZ93vjNYmma5qes2Gl6LJd6hbJPrtzYvcu3l3LW8UckqqzDlXICqSMHg980Aep0V5ldajqWn/2p4bh1O7KDWbOyhvJJC88UM6o7LvOSWHzAMckbh6Uur6lqPhb/AISXS7LUbuZEs7Oe0mupTPJbNPK0LfM+SwG0OAScc9qAPTKa/wDq2+hrkdLin0Lx0mix6hfXdld6Y90Vvbhp2jljkRSQzcgMJOnTK8AVt6vr9no5WO5h1B2kQkG10+e4A+pjRgPxoApeAf8Aknfhr/sF23/opa6Kud8A/wDJO/DX/YLtv/RS10VABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUVj+ItdTRLFSkfn3s7eXa246yOf6DvVRi5OyJlJRV2UvEmr3PnxaFo5zql0Pmftbx93Pv6f8A6s6ujaRbaHpkdlaj5V5dz96Rj1Y+5qn4b0J9Kglub2Tz9Uuz5l1MfXso9hW5VzkkuSO35/10M6cW3zy3/Jf1uFFFFZGwUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFNf/Vt9DTqa/wDq2+hoA5/wD/yTvw1/2C7b/wBFLXRVzvgH/knfhr/sF23/AKKWuioAKKKKACiiigAooooAKKKKACsjxHoI8SaRLpsmo3tlBOrRzfZDGGkRlKsp3o3BB7YPvWvRQBgL4ZuE0uCyTxLrSmEnFwrQeYykAbT+624GOOM+9JJ4N0w6HbaXC1zb/ZZ/tMN1HL+/WfJJk3MDuY7mzkEHceK6CigDnV8F6b/Y13p8013O93OLqa9klH2hplKlZAwAAK7FxgADaOKIPBunCx1S3vZrrUX1RAl3cXbjzHVQQqjYFChckjAHJJ610VFAGJo/hmDSb6W/kv77Ub2SJYBcXsisyRg5CLtVQBk5Jxk8ZJrZf/Vt9DTqa/8Aq2+hoA5/wD/yTvw1/wBgu2/9FLXRVzvgH/knfhr/ALBdt/6KWuioAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKbJIkUbSSMERAWZmOAAOpNAFbU9SttI06a+u5NkMQyfUnsB7msHw7ptzf3zeJNXj23cy4tbc9LaLt/wACPf6++KrWUb+M9XXU7hGGiWbn7HCwx9okHWQj0Hb/APXXZVvL92uVbvf/AC/zMI/vZcz2W3n5/wCX3hRRRWBuFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU1/8AVt9DTqa/+rb6GgDn/AP/ACTvw1/2C7b/ANFLXRVzvgH/AJJ34a/7Bdt/6KWuioAKKKKACiiigAooooAKKK8n+zaRfavrD3/hLWPEMi6hMov4QGjwGP7tQ8i48v7nygj5c5yTQB6xRVXTEij0mzSG1ktIlgQJbyABoV2jCHBIyBx1PTrVqgAooooAKKKKACmv/q2+hp1Nf/Vt9DQBz/gH/knfhr/sF23/AKKWuirnfAP/ACTvw1/2C7b/ANFLXRUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFcdqc0vi3V30Szdl0q2Yf2hcIf8AWN/zyU/z/wA5t+I9WuprqPw/o7f8TG5XMso6W0Xdj7+n/wCqtjSNJtdF02KxtFxGg5Y9Xbux9zW8f3a53u9v8/8AIwl+8fItlv8A5f5luGGO3gSGFFjijUKiKMBQOgp9FFYG4UUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU1/9W30NOpr/wCrb6GgDn/AP/JO/DX/AGC7b/0UtdFXO+Af+Sd+Gv8AsF23/opa6KgAooooAKKKKACiiigArzKP5fFGq2Gl+Ktfg3vc3jLDZW7W4dGXzI4y8ZywLqDjuTk5zXpvSvOB4eur+/n1XRPEkdjYpNqEDpPZh5IWeYfaCjbwP9ZESpIONx68AAHdaROl1othcR3T3SS28brcOoVpQVBDkAAAnrgADmrtZnhw2TeF9JOmrItgbKE2wkGGEWwbc++MVp0AFFFFABRRRQAU1/8AVt9DTqa/+rb6GgDn/AP/ACTvw1/2C7b/ANFLXRVzvgH/AJJ34a/7Bdt/6KWuioAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArF8R66NGtESCPz9QuW8u1tx1dvU+w71d1bVLXRtNmvrt9sUY6Dqx7Ae5rF8OaXdXN4/iLWExf3C4ghPS2i7KPc9/8A65rWnFJc8tvz/rqZVJNvkjv+S/rYueHNCOj2sktzJ5+pXTeZdTnqzeg9h2rbooqJScndlxiorlQUUUVJQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU1/9W30NOpr/wCrb6GgDn/AP/JO/DX/AGC7b/0UtdFXO+Af+Sd+Gv8AsF23/opa6KgAooooAKKKKACiiigCpqUButPltvs0Fyk2IpYZ2wjRMQJM8HPyFuMcnjjOa87f4fra3M6WXw/8JzWwmdonuLt97KWJGQYTjr93JA6DgV6LqU17b2EsunWkd3dLjZBJN5StyM5fa2MDJ6HpiuNi8ZeLbm2vbi28FW88dpLJExTWB+8dCQ4XMQzggjtyDjNAHa2SyJYW6zQxQSiJQ8ULbkRsDKqcDIHQcDjsKnqnpN+NU0ax1AKii6t45wqPuUblDYDYGRz1wPoKz/Fet33h7QrnVLPTEv1tYZJ5la5EO1EUsTna2Tx0xQBuUVzuq+JZ7N9HtrLT0ub7VAzRRy3HkxqFQM259rHPIwApJ59KpJ44abR7WaDS2fU7m/k06Kz88bDNGW3nzcfcARjux2xjPFAHX0VyR8bGHS71rrTHj1a0vI7E2EcwfzJpNvl7ZMAbWDg7iBgA8cUv/CamxtNZOtaabS90uKOZ7eCbzhMkmRGY2IXJLKVwQMEfjQB1lNf/AFbfQ1g6R4hvbnWX0fV9KXT777MLqJY7kTpJHu2t821cMpKgjGPmGCa3n/1bfQ0Ac/4B/wCSd+Gv+wXbf+ilroq53wD/AMk78Nf9gu2/9FLXRUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABTJZY4IXmldUjRSzMxwAB1Jp9cbfyyeMdXfSbZ2XRrRx9tmU485x0jU+nr/+rN04cz12W5nUnyrTd7C6dFJ4v1dNZukZdItXP2CBh/rWH/LVh/L/APXnsaZFFHDEkUSKkaKFVVGAAOgFPoqT5npstgpw5Vru9woooqDQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmv/q2+hp1Nf/Vt9DQBz/gH/knfhr/sF23/AKKWuirnfAP/ACTvw1/2C7b/ANFLXRUAFFFFABRRRQAUUUUAFeYSwWGpeKdRsbJdetbK4F3LKLa/EUF3NCyLMqpyy5Z8FgVyQ31r0+vKdds9Oa+/tHTbzxCGuLq9tDp+niHLndm6ZDJyilock7gc/dALcgHo2hT2d14e0y40+LyrKW0ie3jxjZGUBUfgMVmeOY9QuvB+p6dpmlzX9zf2s1qqxSxp5ZeNlDMXZeMkdMn2rW0Z7KXQ9Pk00BbBraNrYAYAiKjZ+mKu0Aefarpuqa1aaFJf+F5rqxsxIl1o81xAWkfaojlHz+WwGHG0sPvZxxUdn4b1vT9L0q9gsB52mapNdW+lfaFJitZEePyVcnbuAfcBnaPu5xivRaKAPPZ/Det38Oo621mkGpy6ra39vYSTKf3cAVQjOMqGYBzwSASOetLqHhvWfEqeINQuLMabdXVtbW9jbTyq5zBI0wMhQsoDO2OCcAZ9q9BooA5TSrbVtT8XjXdS0ttMitrBrOKCSdJHkZ3V3bKEgKPLUDnJyeBWtq+gWesFZLmbUEaNCALXUJ7cH6iN1B/GtWmv/q2+hoA5/wAA/wDJO/DX/YLtv/RS10Vc74B/5J34a/7Bdt/6KWuioAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKxPEmunSLaOC1j8/U7o+XawDu394+wqoxcnZEykormZS8R6ndXd6nhzR3xezrm4nHS2i7n/ePb/64rc0rS7XR9OhsbRNsUYx7se5PuapeHdCGi2bmaTz7+4bzLq4PV3P9B2rZq6klbkjt+f9dCKcXfnlu/w/rqFFFFZGoUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABTX/1bfQ06mv/AKtvoaAOf8A/8k78Nf8AYLtv/RS10Vc74B/5J34a/wCwXbf+ilroqACiiigAooooAKKKKACvOLy1vNH1bVdUtvBmpzhhOFkj1SMqFc5kkiiLfKz7QxwM5r0euZvPB8l9cXDyeJ/ECRTuzG3iuY0RQT91cJuA5wOc+9AGp4d+z/8ACM6V9ki8q2+xw+VHvD7E2DaNw4OBjkda0qgs7SDT7G3srWMR29vGsUSDoqqMAfkKnoAKKKKACiiigApr/wCrb6GnU1/9W30NAHP+Af8Aknfhr/sF23/opa6Kud8A/wDJO/DX/YLtv/RS10VABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFRzzxW0Ek88ixxRqWd2OAoHU0AVNY1a20TTJb66bCIMKo6u3ZR7msjw3pNy9zJr+sL/AMTK5XEcR6W0XZB7+v8A+uqulQS+LNWTXb2Nl023YjTrdx98/wDPVh/L/wCtz2FbS/drkW/X/L/Mwj+8lzvZbf5/5BRRRWJuFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFNf/AFbfQ06mv/q2+hoA5/wD/wAk78Nf9gu2/wDRS10Vc74B/wCSd+Gv+wXbf+ilroqACiiigAooooAKKKKACvJ7nxSNK8a3S61rV7BJJFqEX2HcwUKHiFsYkA+ZmQsQwySSw7YHqN7fWmm2j3d9dQWttHjfNPIERcnAyx4HJA/GvN4fFEOsXl/LJ8S7DSRFdyRQ20DWhURA4Rt8gYsWXDEg4BJHagDv9BN8fDumHUwRf/ZIvtOevm7Bv/XNaFVtPYPplq63gvQ0KEXQ24n4Hz/L8vzdeOOeKs0AFFFFABRRRQAU1/8AVt9DTqa/+rb6GgDn/AP/ACTvw1/2C7b/ANFLXRVzvgH/AJJ34a/7Bdt/6KWuioAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArjbt38aau2nQMRodm4+1SqcC5kH/LMH0Hf/wDVVjxDqNzqN+PDWkSbbmVc3lwP+XeLv/wI/wBffI39N0620nT4bK0j2QxLgDufUn3Nbx/drm6vby8/8jCX72XKtlv5+X+f3FlESKNY41CooAVVGAAOwp1FFYG4UUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFNf/Vt9DTqa/wDq2+hoA5/wD/yTvw1/2C7b/wBFLXRVzvgH/knfhr/sF23/AKKWuioAKKKKACiiigAooooAr34zYT4tBeMqFltztHmsBkLluBkgcniuC0q88QtZTi6+HzSz/abgRu8trGFTzW8tcZ5AXaN2DnGec5Paa5e3mnaTJd2Nm15NG8ZMCKWZo96iTaB1YJuIHcgVzOl/EeC+tpZZdC18MlzPCPJ0qeQYSRkGSF4bCjI7HI7UAdVo0N3baHp8GoOkl7HbRpcPGoVWkCgMQAAAM54AAq7UVrOLq0huFjljWVFcJKhR1yM4ZTyD6g9KloAKKKKACiiigApr/wCrb6GnU1/9W30NAHP+Af8Aknfhr/sF23/opa6Kud8A/wDJO/DX/YLtv/RS10VABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVheJNdfS4YrSxQT6reHZbQ+h7ufYf571d1rWLbQ9MkvbkkhflSMfekY9FHuay/Dej3KzS65q4Dardj7va3j7IPT3//AF51hFJc8tvz/rqY1JNvkjv+S/rYu+HtCTQ7Aozma8nbzLm4brI56/h6Vr0UVEpOTuzSMVFWQUUUVJQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFNf/AFbfQ06mv/q2+hoA5/wD/wAk78Nf9gu2/wDRS10Vc74B/wCSd+Gv+wXbf+ilroqACiiigAooooAKKKKACvLL/Wrf7ZrD6v40vdF1S2uZUtNPiKIBGGPlMsRUmbeMMeud2BjFep1jHxLoTazPpn2yN7+1ieaRFjZvLVdu75gMZG5crnPI4oAt6NPd3WhafcahD5N7LbRvcRYxskKgsv4HIrB+JGlWOpeAdckvLdJmtdPuZod2fkcRNhseorqLeeK6toriCRZIZUDxuvRlIyCPwqhrmgaf4isTZanHNJbHO5IrmSHcCCCG2Mu4EE8HigDG8QW2gDwYmq69pNnqEenWXmxrcwLIQSo+Vcg4LEKPfiucg8NppWjeCfDF9Ci2t7dyy6jAg2xyy+TJL5ZA42b/AOHoQgFdtH4W0iPSI9LME8tlHMk6xz3UsvzowZcszEkAqDtJxx0q3qukWOt2YtdQg82IOJFw7IyOOjKykMpHqCDQB5rcoLU6n4bt2ePQ/wDhJLO08tHIVIpYo5JIVI6KXOMDs5FLrSDw8vi7SdHZrPThDpzGOBtq2xnmaObZj7mYwG4xjr3r0BPC2ix6HLowsENhMxeSN2Zmdyc7y5O4tkA7ic5A54os/DGjWWnXdhFZB7e8z9pE7tM0+Rt+dnJZuOOTQBg6Tptn4e+IraXpEC2tjcaSbia2i4QSLKFV8dmYMwJ77eeldBq8+uwlRpOnafdRlD5jXV68BU+wWJ8/mKNH8OaVoLTPp9uySTBRJJLM8zsFztXc7E7Rk4GcDNab/wCrb6GgDn/AP/JO/DX/AGC7b/0UtdFXO+Af+Sd+Gv8AsF23/opa6KgAooooAKKKKACiiigAooooAKKKKACiiigAqK5uYbO2kuLiRY4YlLO7dABUtcZOzeNtYNrGx/sCyk/fuDxdSj+EH+6P89jWlOHM7vZbmdSfKrLd7Emj203ifVU8Q38bJZQkjTbZ/T/nqw9T2/8ArA119IqqihVUKqjAAGABS0pz5n5Dpw5F59QoooqCwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmv8A6tvoadTX/wBW30NAHP8AgH/knfhr/sF23/opa6Kud8A/8k78Nf8AYLtv/RS10VABRRRQAUUUUAFFFFABXm02ha9DrM97oV7ostjE9+rTXEjh4GnkR5NyqpDlGQ4G5eCAcY59EuLmC0iEtxMkUZdYwztgbmYKo+pYgD3IrzO816LRb3VdK0/xp4YtrWe6nkcXr5uLSSRyZVADANhyxAOMZwc4oA9B0K1trHw9ptnZzefawWsUUMuc+YioArZ9wAa0Kz9Ct7O08PaZbafMJ7KK0ijt5QwYSRhAFbI65GDmtCgAooooAKKKKACmv/q2+hp1Nf8A1bfQ0Ac/4B/5J34a/wCwXbf+ilroq53wD/yTvw1/2C7b/wBFLXRUAFFFFABRRRQAUUUUAFFFFABRRRQAUUVgeJdcl09IbDTkE2rXh2W8f9wd3b2H+e9VCLk7Imc1BXZT8QX9zq+of8I1pMhR2Gb65X/lhGf4R/tH/Pt0Wn2FtpljDZWkYjgiXaqj+Z96peH9Di0LT/JDmW5lbzLidvvSuepP9K1qupJW5I7L8fMinB355bv8PIKKKKyNQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApr/AOrb6GnU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"}
  )

  useEffect(() => {
    document.title = cardname + " カード買取中古価格推移分析ツール - Lapis AI"

    const url_used_price = "https://query-backend-used.vercel.app/query-used-price-card-detail?cardname=" + cardname
    fetch(url_used_price).then(
      (response) => {
        console.log(response)
        return response.json()
      }
    ).then(
      (json_response) => {
        console.log(json_response)
        set_price_data(json_response)
      }
    )

    const url_used_price_img = "https://query-backend-used.vercel.app/query-used-price-card-detail-line-chart-img?cardname=" + cardname
    fetch(url_used_price_img).then(
      (response) => {
        console.log(response)
        return response.json()
      }
    ).then(
      (json_response) => {
        console.log(json_response)
        set_data_base64(json_response)
      }
    )
  }, [])

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 bg-white">
        <nav aria-label="Global" className="flex items-center p-0 lg:px-8">
          
          <div className="flex flex-1 justify-center mr-auto">
            <a target="_blank" href="https://lapisai.com/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/logo.png" className="h-8 w-auto" />
            </a>
          </div>
          
          <div className="mx-4">
            <a target="_blank" href="https://lapisai.com/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/logo_txt@4x.png" className="h-8 w-auto" />
            </a>
          </div>

          <div className="flex flex-1 justify-center ml-auto">
            <a
                href="https://lapisai.com/query-used-price-card"
                target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                カード買取中古価格分析
              </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 mt-12 lg:mx-8 bg-zinc-100 ">
        <div className="mx-auto max-w-2xl pt-12 sm:pt-12 lg:pt-18">
          <div className="w-full place-items-center">
            <img className="object-cover object-center w-full rounded-lg" src="/img_top_cover_used.jpg" alt="Lapis I prototype image" />
          </div>
          
          <div className="text-center">
            <h1 className="text-balance text-xl pt-8 font-semibold tracking-tight text-gray-900 sm:text-xl">
              {cardname} カード買取中古価格分析ツール<br />
              Query - 時系列分析 developed by Lapis AI by 株式会社Rozen
            </h1>
          

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
               中古価格時系列分析とは - Time Series Analysis
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              Time Series Analysis of Used Price (中古価格時系列分析) とは、中古価格の推移を表す分析です。<br />
              通常、中古価格は下落し0円になりますが、希少なアイテムでは中古価格が0円にならず、安定する現象が起きます。<br />
              これらのアイテムの特徴を見極めることで、長期的に価値がある商品を発掘したり、自身でプロダクトをつくる際に長期的に価値が出るように設計・構築したりできるようになります。
              
            </p>

            <p className="mt-2 text-pretty text-base font-semibold text-gray-700 sm:text-lg">
            <a 
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              href="https://affiliate.suruga-ya.jp/modules/af/af_jump.php?user_id=5095&amp;goods_url=https%3A%2F%2Fwww.suruga-ya.jp%2Fman%2Fkaitori%2Fkaitoritop.html" rel="nofollow">【駿河屋】最新作から昔懐かしのアイテムまでなんでも買い取ります！</a>
            </p>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              カード中古買取価格
            </h3>
                <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
                  <span className="px-3 py-1 bg-emerald-800 text-white rounded-full text-xs" >{(price_data?.detail["price"]).toLocaleString()}{"円"}</span>
                  {" "}
                  {price_data?.detail['title']}
                </p>

            <div className="mt-8 text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              <img src={"data:imgage/jpg;base64,"+data_base64}>
            </div>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              関連するカード - カード中古買取価格 {price_data?.keywords}
            </h3>
            {price_data?.results.map(item => (

                <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
                  <span className="px-3 py-1 bg-emerald-800 text-white rounded-full text-xs" >{item["price"].toLocaleString()}{"円"}</span>
                  {" "}
                  <a target="_blank" href={item['url']} className="-m-1.5 p-1.5 text-cyan-800">
                    {item['title']}
                  </a>
                </p>

            ))}

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              アイテム別中古価格推移の3分類
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              中古価格の時系列で見た時の数いの仕方は次の3つのパターンに分類できます。
              <br />1. 時間とともに価格が下落していき、いずれ0円になる
              <br />2. ある程度のところで価格の下落が止まり、一定の価格で取引されるようになる
              <br />3. 時間とともに価値が上がっていき、価格が上昇する
              
            </p>

            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              この3つのパターンのうち、1. 時間とともに価格が下落していき、いずれ0円になるというパターンが大半で、実際流通しているカードのうち、値段がつくカードを調べたところ、わずか24%のカードのみ値段がつくという結果になりました。
              <br />流通されて名前が通っているアイテムに絞ってもこのパーセンテージの少なさとなっており、
              基本的にほとんどのアイテムは、時間とともに価値が減少し、価格は0円になるということが示されているかと思います。
            </p>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              それに対して、2. ある程度のところで価格の下落が止まり、一定の価格で取引されるようになる や 3. 時間とともに価値が上がっていき、価格が上昇する アイテムは、それ自体に価値があることが多いです。
              例えば価格上位にきているアイテムに浮世絵をあしらったものがあります。
              絵自体に価値があったり、文章で言えば技術書であったり、そういったアイテムは価値が0になることなく少なくとも一定の価格を維持するというパターンが見られます。
            </p>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              3. 時間とともに価値が上がっていき、価格が上昇する アイテムを多くの人が求めていると思います。
              <br />実際、アンティークのティーカップや書籍などのいわゆる価値が上がりそうなアイテムであっても、買った時の価格を上回る値がつくというのは非常に稀です。
              やはり経年変化により価格は下落するという方向にどうしてもなりがちです。
              この時間とともに価値が上昇するというある意味ロマンを追いかけるならば、おそらく経年変化をほぼ感じさせないようなもの、
              例えば希少なガジェット（電子機器類）やカードになるのかもしれません。
              
            </p>
            
            <div className="text-left">
              <p className="mt-8 text-pretty text-base font-semibold text-gray-700 sm:text-lg/8">
              
                [今日の開発日記] <br />
                2025-05-18: プロジェクト始動 - さぶや<br /><br />
                2025-05-19: サイトをとりあえず動くようにしました。<br />最近価格が上がったり下がったりしたカードがランキング形式で一覧できるようになっています。- さぶや<br />
                <br />
              </p>
            </div>
            
            <div className="my-10 flex items-center justify-center gap-x-6">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                株式会社Rozen <span aria-hidden="true">→</span>
                <br />
                東京都豊島区西池袋3丁目29番3号梅本ビル4D coba池袋内
                <br />
                yuya@lapisai.com
              </a>
            </div>

            <div className="py-1 flex items-center justify-center gap-x-6">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                更新日: 2025/05/19
              </a>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default UsedCardDetail;
