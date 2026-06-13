import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit {

  title = 'Livro';

  ngAfterViewInit(): void {

    const isSobrePage = window.location.pathname.includes('sobre.html');

    if (!isSobrePage) {
      const sections = ['oque', 'como', 'beneficios'];

      window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(id => {
          const el = document.getElementById(id);

          if (el && window.scrollY >= el.offsetTop - 80) {
            current = id;
          }
        });

        document.querySelectorAll('.nav-link[data-target]').forEach(link => {
          link.classList.remove('active');

          if (link.getAttribute('data-target') === current) {
            link.classList.add('active');
          }
        });
      });
    }

    document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const currentLink = e.currentTarget as HTMLAnchorElement;
        const href = currentLink.getAttribute('href');

        if (href) {
          const target = document.querySelector(href);

          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });

  }
}
