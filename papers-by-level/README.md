# Papers Organized by Grade & Form 📚

Alternative organization method for papers - organized by **Student Level** instead of Subject.

## Structure

```
papers-by-level/
├─ Grade Folders (Elementary & Secondary)
│  ├─ grade-1/       (Grade 1)
│  ├─ grade-2/       (Grade 2)
│  ├─ grade-3/       (Grade 3)
│  ├─ grade-4/       (Grade 4)
│  ├─ grade-5/       (Grade 5)
│  ├─ grade-6/       (Grade 6)
│  ├─ grade-7/       (Grade 7)
│  ├─ grade-8/       (Grade 8)
│  ├─ grade-9/       (Grade 9)
│  ├─ grade-10/      (Grade 10)
│  ├─ grade-11/      (Grade 11)
│  └─ grade-12/      (Grade 12)
│
└─ Form Folders (Kenyan Curriculum)
   ├─ form-1/        (Form 1)
   ├─ form-2/        (Form 2)
   ├─ form-3/        (Form 3)
   └─ form-4/        (Form 4)
```

## How to Use

### For Students
- Browse papers by your grade level
- All papers at your level organized in one place
- Mix of subjects for comprehensive coverage

### For Contributors
Place papers in the appropriate grade/form folder:
```
papers-by-level/grade-10/
├─ algebra-practice.pdf
├─ history-notes.pdf
├─ biology-guide.pdf
└─ ... (all subjects mixed)
```

## Grade Mappings

### Elementary Grades
- **Grade 1-2**: Basic literacy & numeracy
- **Grade 3-4**: Foundation subjects
- **Grade 5-6**: Core curriculum
- **Grade 7-8**: Pre-secondary

### Secondary Grades  
- **Grade 9-10**: Standard exams preparation
- **Grade 11-12**: Advanced studies & university prep

### Kenyan Forms
- **Form 1**: Age 13-14 (Grade 9 equivalent)
- **Form 2**: Age 14-15 (Grade 10 equivalent)
- **Form 3**: Age 15-16 (Grade 11 equivalent)
- **Form 4**: Age 16-17 (Grade 12 equivalent)

## Adding Papers by Level

1. **Identify the level** - What grade or form is this paper for?
2. **Create/Place in folder** - Save to appropriate `grade-X` or `form-X` folder
3. **Update script** - Add entry to `papersData` with level metadata
4. **Commit and push** - Share your contribution

### Example Structure
```
papers-by-level/
├─ grade-10/
│  ├─ README.md
│  ├─ mathematics-algebra.pdf
│  ├─ physics-mechanics.pdf
│  ├─ chemistry-organic.pdf
│  └─ ... more papers
├─ form-3/
│  ├─ README.md
│  └─ ... papers for Form 3 students
```

## Two Organization Methods

### Method 1: By Subject (Original)
```
papers/
├─ mathematics/
├─ physics/
├─ chemistry/
└─ ...
```
**Best for**: Finding papers on specific topics

### Method 2: By Level (This Folder)
```
papers-by-level/
├─ grade-10/
├─ form-3/
└─ ...
```
**Best for**: Students browsing materials for their grade

## Using Both Systems

Papers can be stored in BOTH locations:
- Keep originals in `papers/subject/`
- Create reference copies or shortcuts in `papers-by-level/grade-X/`
- Or use links/folders to avoid duplication

## Benefits

✅ **Intuitive Access** - Students find papers for their level instantly
✅ **Easy Browsing** - All subjects at one grade level in one folder
✅ **Comprehensive** - See all available materials for your year
✅ **Flexible** - Supports both organizational methods
✅ **Scalable** - Works with hundreds of papers

## Quick Reference

| Level | Folder | Target Age |
|-------|--------|-----------|
| Grade 1 | grade-1/ | 6-7 |
| Grade 2 | grade-2/ | 7-8 |
| Grade 3 | grade-3/ | 8-9 |
| Grade 4 | grade-4/ | 9-10 |
| Grade 5 | grade-5/ | 10-11 |
| Grade 6 | grade-6/ | 11-12 |
| Grade 7 | grade-7/ | 12-13 |
| Grade 8 | grade-8/ | 13-14 |
| Grade 9 | grade-9/ | 14-15 |
| Grade 10 | grade-10/ | 15-16 |
| Grade 11 | grade-11/ | 16-17 |
| Grade 12 | grade-12/ | 17-18 |
| Form 1 | form-1/ | 13-14 |
| Form 2 | form-2/ | 14-15 |
| Form 3 | form-3/ | 15-16 |
| Form 4 | form-4/ | 16-17 |

## Contributing

To add papers to this structure:

1. **Save your paper** in the relevant grade/form folder
2. **Update README.md** in that folder with paper details
3. **Update papersData** in `js/script.js` with metadata
4. **Submit pull request** or push changes

## Notes

- Both organizational systems work independently
- Users can access papers via subject OR by level
- Eventually, UI will support browsing by both methods
- No duplication needed - can use symbolic links or references

---

**See Also:**
- `/papers/` - Papers organized by subject
- `docs/CONTRIBUTING.md` - Contributing guidelines
- `js/script.js` - Paper metadata management
