USE [master]
GO
/****** Object:  Database [J3.L.P0017]    Script Date: 11/3/2019 11:57:48 PM ******/
CREATE DATABASE [J3.L.P0017]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'J3.L.P0017', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\J3.L.P0017.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'J3.L.P0017_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\J3.L.P0017_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [J3.L.P0017] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [J3.L.P0017].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [J3.L.P0017] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [J3.L.P0017] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [J3.L.P0017] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [J3.L.P0017] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [J3.L.P0017] SET ARITHABORT OFF 
GO
ALTER DATABASE [J3.L.P0017] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [J3.L.P0017] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [J3.L.P0017] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [J3.L.P0017] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [J3.L.P0017] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [J3.L.P0017] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [J3.L.P0017] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [J3.L.P0017] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [J3.L.P0017] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [J3.L.P0017] SET  DISABLE_BROKER 
GO
ALTER DATABASE [J3.L.P0017] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [J3.L.P0017] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [J3.L.P0017] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [J3.L.P0017] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [J3.L.P0017] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [J3.L.P0017] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [J3.L.P0017] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [J3.L.P0017] SET RECOVERY FULL 
GO
ALTER DATABASE [J3.L.P0017] SET  MULTI_USER 
GO
ALTER DATABASE [J3.L.P0017] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [J3.L.P0017] SET DB_CHAINING OFF 
GO
ALTER DATABASE [J3.L.P0017] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [J3.L.P0017] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [J3.L.P0017] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'J3.L.P0017', N'ON'
GO
USE [J3.L.P0017]
GO
/****** Object:  Table [dbo].[article]    Script Date: 11/3/2019 11:57:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[article](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](250) NULL,
	[content] [nvarchar](max) NULL,
	[image] [nvarchar](250) NULL,
	[date] [datetime] NULL,
 CONSTRAINT [PK_article] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[course]    Script Date: 11/3/2019 11:57:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[course](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](250) NULL,
	[description] [nvarchar](250) NULL,
	[price] [float] NULL,
	[date] [datetime] NULL,
 CONSTRAINT [PK_course] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[employee]    Script Date: 11/3/2019 11:57:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[employee](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](250) NULL,
	[role] [nvarchar](250) NULL,
	[description] [nvarchar](max) NULL,
	[image] [nvarchar](250) NULL,
 CONSTRAINT [PK_employee] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[services]    Script Date: 11/3/2019 11:57:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[services](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](250) NULL,
	[time] [int] NULL,
	[price] [float] NULL,
 CONSTRAINT [PK_services] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[article] ON 

INSERT [dbo].[article] ([id], [title], [content], [image], [date]) VALUES (1, N'Bai viet so 1', N'dfgjougijdfiogiodfugiodu', N'1.jpg', CAST(N'2019-02-11 00:00:00.000' AS DateTime))
INSERT [dbo].[article] ([id], [title], [content], [image], [date]) VALUES (2, N'Bai viet so 2', N'er0itopiopdfigopidfgo', N'2.jpg', CAST(N'2019-11-02 00:00:00.000' AS DateTime))
INSERT [dbo].[article] ([id], [title], [content], [image], [date]) VALUES (3, N'Bai viet so 3', N'dfghifg98df90g8dfigjkj', N'3.jpg', CAST(N'2019-10-30 00:00:00.000' AS DateTime))
INSERT [dbo].[article] ([id], [title], [content], [image], [date]) VALUES (4, N'Bai viet so 4', N'fghfghfghfhgfhfghgh', N'1.jpg', CAST(N'2018-05-20 00:00:00.000' AS DateTime))
INSERT [dbo].[article] ([id], [title], [content], [image], [date]) VALUES (5, N'Bai viet so 5', N'dfgdfgdgdfgdfgdfgdfgdg', N'2.jpg', CAST(N'2019-04-05 00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[article] OFF
SET IDENTITY_INSERT [dbo].[course] ON 

INSERT [dbo].[course] ([id], [name], [description], [price], [date]) VALUES (1, N'Khoa lam giau so 1', N'Cam ket thu nhap 1000$ moi thang trong vong 3 thang dau tien', 5000, CAST(N'2019-10-30 00:00:00.000' AS DateTime))
INSERT [dbo].[course] ([id], [name], [description], [price], [date]) VALUES (2, N'Khoa lam giau so 2', N'Cam ket thu nhap 5000$ moi thang trong vong 3 thang dau tien', 30000, CAST(N'2018-02-20 00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[course] OFF
SET IDENTITY_INSERT [dbo].[employee] ON 

INSERT [dbo].[employee] ([id], [name], [role], [description], [image]) VALUES (1, N' nhan vien 1', N'nhan vien cui bap', N'khong biet lam cai gi ca', N'1.jpg')
INSERT [dbo].[employee] ([id], [name], [role], [description], [image]) VALUES (2, N'nhan vien 2', N'Aroma therapist', N'song o my', N'2.jpg')
SET IDENTITY_INSERT [dbo].[employee] OFF
SET IDENTITY_INSERT [dbo].[services] ON 

INSERT [dbo].[services] ([id], [name], [time], [price]) VALUES (1, N'dich vu so 1 ', 15, 456)
INSERT [dbo].[services] ([id], [name], [time], [price]) VALUES (2, N'dich vu so 2', 25, 2)
INSERT [dbo].[services] ([id], [name], [time], [price]) VALUES (3, N'dich vu so 3', 11, 45)
INSERT [dbo].[services] ([id], [name], [time], [price]) VALUES (4, N'dich vu so 4', 14, 566)
INSERT [dbo].[services] ([id], [name], [time], [price]) VALUES (5, N'dich vu so 5', 53, 36)
INSERT [dbo].[services] ([id], [name], [time], [price]) VALUES (6, N'dich vu so 6', 53, 26)
INSERT [dbo].[services] ([id], [name], [time], [price]) VALUES (7, N'dich vu so 7', 455, 47)
INSERT [dbo].[services] ([id], [name], [time], [price]) VALUES (8, N'dich vu so 8', 65, 947)
INSERT [dbo].[services] ([id], [name], [time], [price]) VALUES (9, N'dich vu so 9', 6, 34)
INSERT [dbo].[services] ([id], [name], [time], [price]) VALUES (10, N'dich vu so 10', 456, 45)
SET IDENTITY_INSERT [dbo].[services] OFF
USE [master]
GO
ALTER DATABASE [J3.L.P0017] SET  READ_WRITE 
GO
