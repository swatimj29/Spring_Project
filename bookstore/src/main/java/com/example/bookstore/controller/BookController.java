package com.example.bookstore.controller;
import com.example.bookstore.model.Book;
import com.example.bookstore.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = {"http://localhost:3000", "http://spring-project-rosy.vercel.app"})
public class BookController {

    private final BookService service;

    public BookController(BookService service) {
        this.service = service;
    }

    @GetMapping
    public List<Book> getBooks() {
        return service.getAllBooks();
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return service.addBook(book);
    }

    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable Long id) {
        service.deleteBook(id);
        return "Book deleted successfully";
    }
    
    @PutMapping("/{id}")
public Book updateBook(@PathVariable Long id, @RequestBody Book updatedBook) {
    Book existingBook = service.getAllBooks().stream()
        .filter(b -> b.getId().equals(id))
        .findFirst()
        .orElseThrow(() -> new RuntimeException("Book not found"));
    
    existingBook.setTitle(updatedBook.getTitle());
    existingBook.setAuthor(updatedBook.getAuthor());
    existingBook.setPrice(updatedBook.getPrice());
    
    return service.addBook(existingBook); // save updated book
}
}
