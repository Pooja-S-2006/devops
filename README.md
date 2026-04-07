# Main Project

This is the main project that demonstrates Git submodule usage.

## Project Structure

- `src/` - Main application source code
- `lib/` - External libraries (managed as Git submodules)
- `docs/` - Documentation

## Dependencies

This project uses external libraries managed through Git submodules:

- **external-library** - Math and string utilities

## Setup

```bash
# Clone the repository with submodules
git clone --recurse-submodules <repository-url>

# Or if already cloned, initialize submodules
git submodule update --init --recursive
```
